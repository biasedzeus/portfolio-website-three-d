import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import MountainTerrain from "./MountainTerrain";
import SnowParticles from "./SnowParticles";
import TwilightSky from "./TwilightSky";

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Slow forward glide toward mountains
    state.camera.position.z = 18 - t * 0.12;
    state.camera.position.y = 4 + Math.sin(t * 0.15) * 0.4;
    state.camera.position.x = Math.sin(t * 0.08) * 0.6;
    state.camera.lookAt(0, 2, -10);
  });
  return null;
}

export default function HomePage() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 4, 18], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        {/* Twilight atmospheric fog — warm purple haze */}
        <fog attach="fog" args={["#4a3555", 15, 55]} />

        {/* Gradient sky dome */}
        <TwilightSky />

        {/* Dawn lighting */}
        <ambientLight intensity={0.25} color="#6655aa" />
        <directionalLight
          position={[-8, 6, -12]}
          intensity={1.2}
          color="#ffaa55"
        />
        <directionalLight
          position={[5, 8, 5]}
          intensity={0.4}
          color="#8888cc"
        />
        <pointLight position={[-12, 4, -8]} intensity={0.6} color="#ff8844" />
        <pointLight position={[10, 2, -15]} intensity={0.3} color="#aa88dd" />

        {/* Camera slow-mo glide */}
        <CameraRig />

        {/* Procedural mountain terrain */}
        <MountainTerrain />

        {/* Falling snow */}
        <SnowParticles />
      </Canvas>
    </div>
  );
}
