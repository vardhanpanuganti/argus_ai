import "./ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";

import tokyo from "../../assets/destinations/tokyo.jpg";
import paris from "../../assets/destinations/paris.jpg";
import dubai from "../../assets/destinations/dubai.jpg";

const destinations = [
  {
    image: tokyo,
    title: "Tokyo",
    country: "Japan",
    description:
      "Neon streets, futuristic architecture, incredible food and unforgettable nightlife.",
  },
  {
    image: paris,
    title: "Paris",
    country: "France",
    description:
      "Romantic streets, timeless landmarks and world-class cafés in the heart of Europe.",
  },
  {
    image: dubai,
    title: "Dubai",
    country: "UAE",
    description:
      "Luxury shopping, desert adventures and one of the world's most modern skylines.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience">

      <div className="experience-container">

        <div className="experience-header">

          <span>EXPERIENCE DESTINATIONS</span>

          <h2>
            Preview Your Journey
            <br />
            Before You Travel
          </h2>

          <p>
            Explore breathtaking destinations through immersive visuals
            before planning your next adventure with ARGUS AI.
          </p>

        </div>

        <div className="experience-grid">

          {destinations.map((place, index) => (
            <ExperienceCard key={index} {...place} />
          ))}

        </div>

      </div>

    </section>
  );
}