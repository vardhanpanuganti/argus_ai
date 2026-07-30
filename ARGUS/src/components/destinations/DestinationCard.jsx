import "./DestinationSection.css";

export default function DestinationCard({
  image,
  country,
  city,
  rating,
  price,
}) {
  return (
    <div className="destination-card">

      <img
        src={image}
        alt={city}
      />

      <div className="destination-overlay"></div>

      <div className="destination-content">

        <span className="destination-country">
          {country}
        </span>

        <h3>{city}</h3>

        <div className="destination-bottom">

          <span>⭐ {rating}</span>

          <span>From ${price}</span>

        </div>

      </div>

    </div>
  );
}