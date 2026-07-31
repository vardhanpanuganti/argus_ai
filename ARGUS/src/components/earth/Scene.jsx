import { Canvas } from "@react-three/fiber";

import EarthSystem from "./EarthSystem";
import Lights from "./Lights";
import Controls from "./Controls";
import SpaceStars from "./Stars";

export default function Scene({
  selectedDestination,
  onSelectDestination,
  onRotationComplete,
}) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 35,
      }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      <Lights />

      <SpaceStars />

      <EarthSystem
        selectedDestination={selectedDestination}
        onSelectDestination={onSelectDestination}
        onRotationComplete={onRotationComplete}
      />

      <Controls />
    </Canvas>
  );
}