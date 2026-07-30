import useMousePosition from "../../hooks/useMousePosition";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth() {

  const earthRef = useRef();
  const mouse = useMousePosition();

  const texture = useLoader(
    THREE.TextureLoader,
    "/earth.jpg"
  );

  useFrame(() => {

  if (!earthRef.current) return;

  earthRef.current.rotation.y += 0.0015;

  earthRef.current.rotation.x +=
    (-mouse.y * 0.18 - earthRef.current.rotation.x) * 0.04;

  earthRef.current.rotation.z +=
    (mouse.x * 0.12 - earthRef.current.rotation.z) * 0.04;

 });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1.20, 128, 128]} />
      <meshStandardMaterial
          map={texture}
          metalness={0}
          roughness={1}
      />
    </mesh>
  );
}