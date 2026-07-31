import * as THREE from "three";

export default function latLngToRotation(lat, lng) {
  return {
    x: THREE.MathUtils.degToRad(-lat),
    y: THREE.MathUtils.degToRad(-(lng - 90)),
  };
}