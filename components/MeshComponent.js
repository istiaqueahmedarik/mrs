"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
function MeshComponent({ fileUrl }) {
  const mesh = useRef<Mesh>(null);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const myRef = useRef(null);
  myRef.current = mesh;
  useFrame(() => {
    if (myRef.current) {
      myRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={myRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
  export function TD() {
    const [selectedModel, setSelectedModel] = useState("./mrs/scene.gltf");
    const controlsRef = useRef();
    const handleModelChange = (event) => {
      setSelectedModel(event.target.value);
      controlsRef.current.reset();
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <select 
  value={selectedModel} 
  onChange={handleModelChange}
  className="bg-white text-black px-4 py-2 rounded shadow"
>
  <option value="./mrs/scene.gltf">Rover</option>
  <option value="./drone/scene.gltf">Drone</option>
  {/* Add more options as needed */}
</select>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls ref={controlsRef} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[10, -10, 10]} />
      <pointLight position={[-10, 10, -10]} />
        <MeshComponent fileUrl={selectedModel} />
      </Canvas>
    </div>
  );
  }