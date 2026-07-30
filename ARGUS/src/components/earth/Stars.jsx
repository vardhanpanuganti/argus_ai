import { Stars } from "@react-three/drei";

export default function SpaceStars() {
  return (
    <Stars
      radius={80}
      depth={40}
      count={1200}
      factor={4}
      saturation={0}
      fade
      speed={0.3}
    />
  );
}