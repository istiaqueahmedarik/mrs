"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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

const models = [
  {
    value: "./mrs/scene.gltf",
    label: "Rover",
  },
  {
    value: "./drone/scene.gltf",
    label: "Drone",
  },
 
]


  export function TD() {
    const [selectedModel, setSelectedModel] = useState("./mrs/scene.gltf");
    const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
    const controlsRef = useRef();
    const handleModelChange = (event) => {
      setSelectedModel(event.target.value);
      controlsRef.current.reset();
    };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
       <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? models.find((model) => model.value === value)?.label
            : "Select model..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search model..." />
          <CommandEmpty>No model found.</CommandEmpty>
          <CommandGroup>
            {models.map((model) => (
              <CommandItem
                key={model.value}
                value={model.value}
                onSelect={(currentValue) => {
                  setSelectedModel(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === model.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {model.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>


      
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