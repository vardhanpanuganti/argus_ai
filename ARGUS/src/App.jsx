import { useState } from "react";
import Hero from "./components/hero/Hero";
import FeatureSection from "./components/features/FeatureSection";
import DestinationSection from "./components/destinations/DestinationSection";
import AIPlanner from "./components/planner/AIPlanner";
import Stats from "./components/stats/Stats";
import ExperienceSection from "./components/experience/ExperienceSection";
import AISection from "./components/ai/AISection";


export default function App() {

  const [heroPrompt, setHeroPrompt] = useState("");

  return (
    <div className="app">

      <Hero
        onAISearch={setHeroPrompt}
      />

      <FeatureSection />

      <DestinationSection />
      <AIPlanner/>
      <Stats/>
      <ExperienceSection/>

      <AISection
        heroPrompt={heroPrompt}
      />

    </div>
  );
}