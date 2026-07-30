export default function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.24, 128, 128]} />

      <meshBasicMaterial
        color="#4da6ff"
        transparent
        opacity={0.12}
        side={2}
      />
    </mesh>
  );
}