"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
function MeshComponent() {
    const fileUrl = "./mrs/scene.gltf";
    const mesh = useRef<Mesh>(null);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const myRef = useRef(null);
    myRef.current = mesh;
    useFrame(() => {
        myRef.current.rotation.y += 0.01;
     });
    return (
      <mesh ref={myRef}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }
  
  export function TD() {
    return (
      <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
      </div>
    );
  }