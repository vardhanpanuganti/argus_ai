import { Canvas } from "@react-three/fiber";

import Earth from "./Earth";
import Atmosphere from "./Atmosphere";
import Clouds from "./Clouds";
import Lights from "./Lights";
import Controls from "./Controls";
import SpaceStars from "./Stars";

export default function Scene() {
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

      <Earth />

      <Clouds />

      <Atmosphere />

      <Controls />
    </Canvas>
  );
}