import destinations from "../../../data/destinations";
import Marker from "./Marker";

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

export default function Markers({
  selectedDestination,
  onSelectDestination,
}) {

  const radius = 1.30;

  return (
    <group>

      {destinations.map((destination) => (

        <Marker
          key={destination.id}

          destination={destination}

          position={latLngToVector3(
            destination.lat,
            destination.lng,
            radius
          )}

          selected={
            selectedDestination?.id === destination.id
          }

          onSelect={onSelectDestination}
        />

      ))}

    </group>
  );
}