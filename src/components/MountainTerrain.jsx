import React, { useRef, useMemo, useEffect } from "react";
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
    // Stark crisp light gray wireframe lines
    vec3 glowColor = vec3(0.72, 0.72, 0.75);
    // Deep black base
    vec3 baseColor = vec3(0.005, 0.005, 0.006);

    // Normalize elevation: peaks are bright, valleys fade out
    float factor = clamp((vElevation + 1.2) / 8.0, 0.0, 1.0);
    vec3 color = mix(baseColor, glowColor, factor);

    // Fade into background color in the distance (fog)
    float dist = length(vWorldPos.xz) * 0.015;
    float hazeFactor = 1.0 - exp(-dist * dist * 0.5);
    color = mix(color, vec3(0.0, 0.0, 0.0), hazeFactor);

    gl_FragColor = vec4(color, 0.9);
  }
`;

export default function MountainTerrain({ onReady }) {
  const meshRef = useRef();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  // Signal the preloader that the WebGL mesh is compiled and rendering
  useEffect(() => {
    // Wait one frame so the GPU has actually processed the geometry
    requestAnimationFrame(() => {
      onReady?.();
    });
  }, [onReady]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, -5]}
    >
      <planeGeometry args={[120, 120, 220, 220]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        wireframe={true}
        transparent={true}
      />
    </mesh>
  );
}
