import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import Earth from "./Earth";
import Clouds from "./Clouds";
import Atmosphere from "./Atmosphere";
import Markers from "./Markers/Markers";

import latLngToRotation from "./helpers/latLngToRotation";

const IDLE_ROTATION_SPEED = 0.0015;
const ROTATION_LERP = 0.06;
const ROTATION_THRESHOLD = 0.015;

export default function EarthSystem({
  selectedDestination,
  onSelectDestination,
  onRotationComplete,
}) {
  const globeRef = useRef();

  const targetRotation = useRef({
    x: 0,
    y: 0,
  });

  const rotationCompleted = useRef(true);

  useEffect(() => {
    if (!selectedDestination) {
      rotationCompleted.current = true;
      return;
    }

    targetRotation.current = latLngToRotation(
      selectedDestination.lat,
      selectedDestination.lng
    );

    rotationCompleted.current = false;
  }, [selectedDestination]);

  useFrame(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    if (selectedDestination) {
      globe.rotation.x = THREE.MathUtils.lerp(
        globe.rotation.x,
        targetRotation.current.x,
        ROTATION_LERP
      );

      globe.rotation.y = THREE.MathUtils.lerp(
        globe.rotation.y,
        targetRotation.current.y,
        ROTATION_LERP
      );

      const dx = Math.abs(
        globe.rotation.x - targetRotation.current.x
      );

      const dy = Math.abs(
        globe.rotation.y - targetRotation.current.y
      );

      if (
        !rotationCompleted.current &&
        dx < ROTATION_THRESHOLD &&
        dy < ROTATION_THRESHOLD
      ) {
        rotationCompleted.current = true;

        if (onRotationComplete) {
          onRotationComplete(selectedDestination);
        }
      }
    } else {
      globe.rotation.y += IDLE_ROTATION_SPEED;

      globe.rotation.x = THREE.MathUtils.lerp(
        globe.rotation.x,
        0,
        0.03
      );
    }
  });

  return (
    <group ref={globeRef}>
      <Earth />

      <Markers
        selectedDestination={selectedDestination}
        onSelectDestination={onSelectDestination}
      />

      <Clouds />

      <Atmosphere />
    </group>
  );
}