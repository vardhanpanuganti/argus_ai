import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Marker({
  position,
  destination,
  selected,
  onSelect,
}) {
  const coreRef = useRef();
  const glowRef = useRef();

  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (coreRef.current) {
      const pulse = selected
        ? 1.45
        : hovered
        ? 1.20
        : 1;

      const breathing = Math.sin(t * 3) * 0.08;

      coreRef.current.scale.setScalar(pulse + breathing);
    }

    if (glowRef.current) {
      const glowScale = selected
        ? 2.2
        : hovered
        ? 1.9
        : 1.6;

      glowRef.current.scale.setScalar(
        glowScale + Math.sin(t * 2) * 0.08
      );
    }
  });

  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(destination);
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
        setHovered(true);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
        setHovered(false);
      }}
    >
      {/* Invisible Click Area */}
      <Sphere args={[0.11, 16, 16]}>
        <meshBasicMaterial
          transparent
          opacity={0}
        />
      </Sphere>

      {/* Outer Glow */}
      <Sphere
        ref={glowRef}
        args={[0.055, 24, 24]}
      >
        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={
            selected
              ? 0.35
              : hovered
              ? 0.25
              : 0.15
          }
        />
      </Sphere>

      {/* Core */}
      <Sphere
        ref={coreRef}
        args={[0.038, 24, 24]}
      >
        <meshStandardMaterial
          color={
            selected
              ? "#93C5FD"
              : "#3B82F6"
          }
          emissive={
            selected
              ? "#60A5FA"
              : "#3B82F6"
          }
          emissiveIntensity={
            selected
              ? 7
              : hovered
              ? 4
              : 2
          }
        />
      </Sphere>
    </group>
  );
}