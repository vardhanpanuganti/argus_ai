import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.45}
      minDistance={5}
      maxDistance={5}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
  );
}