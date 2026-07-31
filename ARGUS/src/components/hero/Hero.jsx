import { useEffect, useState } from "react";
import { heroEntrance } from "../../animations/heroAnimation";
import useMousePosition from "../../hooks/useMousePosition";

import Navbar from "../layout/Navbar";
import SearchBar from "../search/SearchBar";
import Trending from "../search/Trending";
import Scene from "../earth/Scene";
import DestinationPopup from "./DestinationPopup";

import "./Hero.css";

export default function Hero({ onAISearch }) {
  const mouse = useMousePosition();

  // Destination the globe is rotating toward
  const [targetDestination, setTargetDestination] = useState(null);

  // Destination currently displayed in popup
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    heroEntrance();
  }, []);

  return (
    <section className="hero">
      <Navbar />

      <div className="hero-wrapper">
        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-tag">
            EXPERIENCE BEFORE YOU DECIDE
          </p>

          <h1>
            Experience Every Destination
            <br />
            Before You
            <br />
            Ever Book It.
          </h1>

          <p className="hero-description">
            Explore countries, cities,
            concerts, hotels, restaurants,
            weather, flights and build your
            perfect trip with AI.
          </p>

          <SearchBar onSearch={onAISearch} />

          <Trending />
        </div>

        {/* RIGHT */}
        <div className="hero-right-wrapper">
          <div className="hero-right">
            <div
              className="hero-parallax"
              style={
                window.innerWidth > 992
                  ? {
                      transform: `translate(${80 + mouse.x * 10}px, ${
                        mouse.y * 10
                      }px)`,
                      transition: "transform .15s linear",
                    }
                  : {}
              }
            >
              <div className="earth-container">
                <Scene
                  selectedDestination={targetDestination}
                  onSelectDestination={(destination) => {
                    setSelectedDestination(null);
                    setTargetDestination(destination);
                  }}
                  onRotationComplete={(destination) => {
                    setSelectedDestination(destination);
                  }}
                />

                {/*<DestinationPopup
                  destination={selectedDestination}
                  onClose={() => {
                    setSelectedDestination(null);
                    setTargetDestination(null);
                  }}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}