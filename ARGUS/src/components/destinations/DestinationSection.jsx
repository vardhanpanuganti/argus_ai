import "./DestinationSection.css";
import DestinationCard from "./DestinationCard";

import tokyo from "../../assets/destinations/tokyo.jpg";
import paris from "../../assets/destinations/paris.jpg";
import dubai from "../../assets/destinations/dubai.jpg";
import bali from "../../assets/destinations/bali.jpg";
import switzerland from "../../assets/destinations/switzerland.jpg";
import iceland from "../../assets/destinations/iceland.jpg";

const destinations = [
  {
    city: "Tokyo",
    country: "Japan",
    rating: "4.9",
    price: "599",
    image: tokyo,
  },
  {
    city: "Paris",
    country: "France",
    rating: "4.8",
    price: "499",
    image: paris,
  },
  {
    city: "Dubai",
    country: "UAE",
    rating: "4.9",
    price: "699",
    image: dubai,
  },
  {
    city: "Bali",
    country: "Indonesia",
    rating: "4.8",
    price: "429",
    image: bali,
  },
  {
    city: "Iceland",
    country: "Iceland",
    rating: "4.9",
    price: "799",
    image: iceland,
  },
  {
    city: "Swiss Alps",
    country: "Switzerland",
    rating: "5.0",
    price: "899",
    image: switzerland,
  },
];

export default function DestinationSection() {
  return (
    <section className="destinations">

      <div className="destinations-container">

        <span className="section-tag">
          POPULAR DESTINATIONS
        </span>

        <h2>
          Discover Incredible
          <br />
          Places Around The World
        </h2>

        <p>
          Hand-picked destinations enhanced with AI insights,
          weather intelligence, local experiences and immersive previews.
        </p>

        <div className="destination-grid">

          {destinations.map((item, index) => (
            <DestinationCard
              key={index}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}