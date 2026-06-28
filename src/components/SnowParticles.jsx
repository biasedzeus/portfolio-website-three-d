import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;

export default function SnowParticles() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;       // x
      pos[i * 3 + 1] = Math.random() * 20;            // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;   // z
    }
    return pos;
  }, []);

  useFrame(() => {
    const posArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posArray[i * 3 + 1] -= 0.015; // fall speed
      posArray[i * 3] += Math.sin(Date.now() * 0.0001 + i) * 0.003; // drift

      if (posArray[i * 3 + 1] < -2) {
        posArray[i * 3 + 1] = 18 + Math.random() * 2;
        posArray[i * 3] = (Math.random() - 0.5) * 40;
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 40;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#c1c1ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
