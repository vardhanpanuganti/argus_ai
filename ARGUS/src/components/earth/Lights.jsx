export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[8,5,6]}
        intensity={2.2}
      />

      <directionalLight
        position={[-6,-2,-4]}
        intensity={0.6}
      />

      <pointLight
        position={[0,5,8]}
        intensity={0.35}
      />
    </>
  );
}