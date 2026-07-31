import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls
      enableRotate={false}
      enableZoom={false}
      enablePan={false}
    />
  );
}