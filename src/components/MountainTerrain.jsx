import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 7; i++) {
      v += a * noise(p);
      p *= 2.1;
      a *= 0.48;
    }
    return v;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Sample noise at vertex XY coords (plane is in XY before rotation)
    vec2 nc = pos.xy * 0.22 + vec2(uTime * 0.006, 0.0);

    // Multi-octave displacement
    float elevation = fbm(nc) * 7.0;
    elevation += fbm(pos.xy * 0.5 + 5.0) * 4.0;
    elevation += fbm(pos.xy * 1.1 + 11.0) * 1.5;
    elevation = max(elevation, -1.0);

    // Sharp ridges
    elevation = pow(abs(elevation), 1.25) * sign(elevation);

    pos.z += elevation;
    vElevation = elevation;

    // Compute normal from neighbors for lighting
    float eps = 0.3;
    vec2 ncR = (pos.xy + vec2(eps, 0.0)) * 0.22 + vec2(uTime * 0.006, 0.0);
    vec2 ncU = (pos.xy + vec2(0.0, eps)) * 0.22 + vec2(uTime * 0.006, 0.0);
    float eR = pow(abs(max(fbm(ncR)*7.0 + fbm((pos.xy+vec2(eps,0.0))*0.5+5.0)*4.0, -1.0)), 1.25);
    float eU = pow(abs(max(fbm(ncU)*7.0 + fbm((pos.xy+vec2(0.0,eps))*0.5+5.0)*4.0, -1.0)), 1.25);
    vec3 tangent = vec3(eps, 0.0, eR - elevation);
    vec3 bitangent = vec3(0.0, eps, eU - elevation);
    vNormal = normalize(cross(tangent, bitangent));

    // World position for fog
    vec4 wp = modelMatrix * vec4(pos, 1.0);
    vWorldPos = wp.xyz;

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    // ---- Mountain colors ----
    vec3 deepRock   = vec3(0.10, 0.08, 0.12);
    vec3 rockFace   = vec3(0.22, 0.18, 0.24);
    vec3 warmRock   = vec3(0.35, 0.25, 0.20);
    vec3 snowEdge   = vec3(0.70, 0.72, 0.80);
    vec3 brightSnow = vec3(0.95, 0.96, 1.0);

    float t = clamp(vElevation / 8.0, 0.0, 1.0);

    // Snow starts earlier so peaks are clearly white
    vec3 color = mix(deepRock, rockFace, smoothstep(0.0, 0.12, t));
    color = mix(color, warmRock, smoothstep(0.12, 0.25, t));
    color = mix(color, snowEdge, smoothstep(0.25, 0.40, t));
    color = mix(color, brightSnow, smoothstep(0.45, 0.70, t));

    // Slope-based snow: flatter surfaces collect more snow
    float slopeSnow = pow(max(vNormal.z, 0.0), 2.0);
    color = mix(color, brightSnow, slopeSnow * smoothstep(0.2, 0.5, t) * 0.8);

    // ---- Dawn directional light ----
    vec3 sunDir = normalize(vec3(-0.5, 0.35, -0.7));
    vec3 sunColor = vec3(1.0, 0.6, 0.3);
    vec3 ambientColor = vec3(0.20, 0.15, 0.30);

    float NdotL = max(dot(vNormal, sunDir), 0.0);
    vec3 lighting = ambientColor + sunColor * NdotL * 0.85;

    // Snow catches more light (higher albedo)
    float snowAmount = smoothstep(0.35, 0.7, t);
    lighting += vec3(0.15, 0.12, 0.10) * snowAmount;

    color *= lighting;

    // Warm golden glow on sunlit peaks
    float rimWarm = smoothstep(0.4, 1.0, t) * NdotL;
    color += vec3(0.5, 0.25, 0.10) * rimWarm * 0.5;

    // ---- Atmospheric haze (subtle, preserves detail) ----
    float dist = length(vWorldPos.xz) * 0.012;
    vec3 hazeColor = vec3(0.50, 0.38, 0.52);
    float hazeFactor = 1.0 - exp(-dist * dist * 0.4);
    color = mix(color, hazeColor, hazeFactor * 0.5);

    // Light valley mist
    float valleyHaze = smoothstep(1.5, -1.0, vElevation);
    color = mix(color, vec3(0.40, 0.35, 0.50), valleyHaze * 0.25);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function MountainTerrain() {
  const meshRef = useRef();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, -8]}
    >
      <planeGeometry args={[100, 100, 300, 300]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
