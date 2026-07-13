import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;

export default function SnowParticles() {
  const pointsRef = useRef();

  // Programmatically create a soft, blurred radial gradient texture for the bokeh effect
  const snowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.25, "rgba(255, 255, 255, 0.65)");
    gradient.addColorStop(0.55, "rgba(255, 255, 255, 0.15)");
    gradient.addColorStop(1.0, "rgba(255, 255, 255, 0.0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;       // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;   // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;   // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.45;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Downward snowfall velocity
      posArray[i * 3 + 1] -= 0.035; 
      // Gentle wind sway
      posArray[i * 3] += Math.sin(t + i) * 0.006; 
      posArray[i * 3 + 2] += Math.cos(t * 0.5 + i) * 0.003;

      // Wrap-around boundary: reset at the top if fell past viewport bottom
      if (posArray[i * 3 + 1] < -18) {
        posArray[i * 3 + 1] = 18;
        posArray[i * 3] = (Math.random() - 0.5) * 60;
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
        size={0.28}
        color="#ffffff"
        map={snowTexture}
        transparent
        opacity={0.65}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
