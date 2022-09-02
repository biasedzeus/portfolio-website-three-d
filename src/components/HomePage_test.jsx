import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  MeshReflectorMaterial,
  Text,
  MeshWobbleMaterial,
  PointMaterial,
  CurveModifier,
} from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.1} />
      <directionalLight position={[0, 10, 5]} intensity={0.1} />
      <spotLight position={[0, 1000, 0]} intensity={0.11} />
    </>
  );
};

const Box = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.03;
    meshRef.current.rotation.y += 0.03;
  });
  return (
    <PresentationControls
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={true} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={3} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-100, 10]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      // color="#151515"
    >
      <mesh ref={meshRef}>
        {/* <boxGeometry  args={[2, 2, 2]} /> */}
        <sphereGeometry />
        {/* <meshStandardMaterial color="yellow" /> */}
        <MeshWobbleMaterial factor={1} speed={10} />
      </mesh>
    </PresentationControls>
  );
};



function HomePage_test() {
  return (
    <>
      <Canvas camera={[0, 10, 10]} fov>
        <Lights />
        <Box />
        <points>
          <PointMaterial
            transparent
            vertexColors
            size={15}
            sizeAttenuation={false}
            depthWrite={false}
          />
        </points>
      </Canvas>
    </>
  );
}

export default HomePage_test;
