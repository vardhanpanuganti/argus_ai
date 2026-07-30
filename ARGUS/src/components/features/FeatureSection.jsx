import "./FeatureSection.css";
import FeatureCard from "./FeatureCard";

import {
    BrainCircuit,
    CloudSun,
    Plane,
    Globe2
} from "lucide-react";

const features = [

    {
        icon: BrainCircuit,
        title: "AI Trip Planner",
        description:
            "Generate complete travel itineraries with intelligent recommendations tailored to your interests."
    },

    {
        icon: CloudSun,
        title: "Live Weather",
        description:
            "Get accurate weather forecasts and travel conditions before you leave."
    },

    {
        icon: Plane,
        title: "Flight Intelligence",
        description:
            "Discover smarter routes, compare fares and receive AI-powered travel insights."
    },

    {
        icon: Globe2,
        title: "Explore in 3D",
        description:
            "Experience destinations interactively before booking your next adventure."
    }

];

export default function FeatureSection(){

    return(

<section className="features">

<div className="section-header">

<span>
THE FUTURE OF TRAVEL
</span>

<h2>

AI That Understands

<br/>

Every Journey

</h2>

<p>

ARGUS combines artificial intelligence,

real-time travel intelligence,

weather,

flights,

and immersive exploration

into one premium platform.

</p>

</div>

<div className="features-grid">

{

features.map((feature,index)=>(

<FeatureCard

key={index}

{...feature}

/>

))

}

</div>

</section>

    );

}