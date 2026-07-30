import { useEffect } from "react";
import { heroEntrance } from "../../animations/heroAnimation";
import useMousePosition from "../../hooks/useMousePosition";

import Navbar from "../layout/Navbar";
import SearchBar from "../search/SearchBar";
import Trending from "../search/Trending";
import GlassCards from "../cards/GlassCards";
import Scene from "../earth/Scene";

import "./Hero.css";

export default function Hero({ onAISearch }) {

    const mouse = useMousePosition();

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
                        Explore countries, cities, concerts,
                        hotels, restaurants, weather,
                        flights and build your perfect trip with AI.
                    </p>

                    {/* 👇 This is the important change */}
                    <SearchBar onSearch={onAISearch} />

                    <Trending />

                </div>

                {/* RIGHT */}

                <div className="hero-right-wrapper">

                    <div className="hero-right">

                        <div
                            className="hero-parallax"
                            style={{
                                transform: `translate(${80 + mouse.x * 10}px, ${mouse.y * 10}px)`,
                                transition: "transform .15s linear",
                            }}
                        >

                            <div className="earth-container">

                                <Scene />

                                <GlassCards />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}