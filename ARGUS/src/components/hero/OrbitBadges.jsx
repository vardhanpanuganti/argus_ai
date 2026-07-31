import "./OrbitBadges.css";
import { useState } from "react";
import destinations from "../../data/destinations";
import DestinationPopup from "./DestinationPopup";

export default function OrbitBadges() {

  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <>
      <div className="orbit-badges">

        {destinations.map((destination) => (

          <button
            key={destination.id}
            className={`orbit-badge ${destination.position}`}
            onClick={() => setSelectedDestination(destination)}
          >

            <img
              src={destination.flag}
              alt={destination.country}
            />

            <span>{destination.name}</span>

          </button>

        ))}

      </div>

      {selectedDestination && (

        <DestinationPopup
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />

      )}

    </>
  );
}