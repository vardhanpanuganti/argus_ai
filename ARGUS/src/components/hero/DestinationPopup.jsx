import "./DestinationPopup.css";

export default function DestinationPopup({
  destination,
  onClose,
}) {
  if (!destination) return null;

  return (
    <div className="destination-popup">

      <button
        className="popup-close"
        onClick={onClose}
        aria-label="Close popup"
      >
        ✕
      </button>

      <img
        src={destination.image}
        alt={destination.name}
        className="popup-image"
      />

      <div className="popup-content">

        <div className="popup-title">

          <img
            src={destination.flag}
            alt={destination.country}
            className="popup-flag"
          />

          <div>

            <h2>{destination.name}</h2>

            <p>{destination.country}</p>

          </div>

        </div>

        <div className="popup-stats">

          <div className="popup-stat">

            <span>⭐</span>

            <p>{destination.rating}</p>

          </div>

          <div className="popup-stat">

            <span>☀</span>

            <p>{destination.temperature}°C</p>

          </div>

          <div className="popup-stat">

            <span>✈</span>

            <p>{destination.flights}</p>

          </div>

        </div>

        <p className="popup-weather">

          {destination.weather}

        </p>

        <p className="popup-description">

          {destination.description}

        </p>

        <div className="popup-buttons">

          <button>Flights</button>

          <button>Hotels</button>

          <button>Guide</button>

        </div>

      </div>

    </div>
  );
}