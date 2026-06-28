import React, { useMemo } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fragmentShader = `
  varying vec3 vWorldPosition;

  void main() {
    float height = normalize(vWorldPosition).y;

    // Horizon band: warm orange/gold
    vec3 horizonLow  = vec3(0.85, 0.45, 0.15);  // Deep orange
    vec3 horizonMid  = vec3(0.95, 0.55, 0.30);  // Gold
    vec3 horizonHigh = vec3(0.75, 0.45, 0.50);  // Dusty rose
    vec3 midSky      = vec3(0.30, 0.25, 0.55);  // Twilight purple
    vec3 zenith       = vec3(0.08, 0.08, 0.20);  // Deep night blue

    vec3 color = horizonLow;
    color = mix(color, horizonMid,  smoothstep(-0.02, 0.02, height));
    color = mix(color, horizonHigh, smoothstep(0.02, 0.08, height));
    color = mix(color, midSky,      smoothstep(0.08, 0.25, height));
    color = mix(color, zenith,       smoothstep(0.25, 0.6, height));

    // Sun glow near horizon
    float sunGlow = exp(-pow((height - 0.01) * 12.0, 2.0));
    color += vec3(0.6, 0.3, 0.1) * sunGlow * 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function TwilightSky() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      depthWrite: false,
    });
  }, []);

  return (
    <mesh material={material}>
      <sphereGeometry args={[200, 32, 32]} />
    </mesh>
  );
}
