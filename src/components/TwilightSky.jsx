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

    // Monochromatic charcoal/black space gradients
    vec3 horizonLow  = vec3(0.01, 0.01, 0.012);
    vec3 horizonMid  = vec3(0.006, 0.006, 0.007);
    vec3 horizonHigh = vec3(0.004, 0.004, 0.005);
    vec3 midSky      = vec3(0.002, 0.002, 0.003);
    vec3 zenith      = vec3(0.001, 0.001, 0.002);

    vec3 color = horizonLow;
    color = mix(color, horizonMid,  smoothstep(-0.02, 0.02, height));
    color = mix(color, horizonHigh, smoothstep(0.02, 0.08, height));
    color = mix(color, midSky,      smoothstep(0.08, 0.25, height));
    color = mix(color, zenith,      smoothstep(0.25, 0.6, height));

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
