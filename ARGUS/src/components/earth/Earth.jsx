import earthTexture from "../../assets/textures/earth.jpg";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth() {
  const texture = useLoader(
    THREE.TextureLoader,
    earthTexture
  );

  return (
    <mesh>
      <sphereGeometry args={[1.2, 128, 128]} />

      <meshStandardMaterial
        map={texture}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}