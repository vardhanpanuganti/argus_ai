import { useState, useEffect, useRef } from "react";
import "./AISection.css";
import ChatWindow from "./ChatWindow";
import PromptInput from "./PromptInput";
import { generateTravelPlan } from "../../services/gemini";

export default function AISection({ heroPrompt }) {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "👋 Hello! I'm ARGUS AI.\n\nTell me where you'd like to travel and I'll generate a complete travel plan.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sectionRef = useRef(null);

  async function handleGenerate(prompt) {
    if (!prompt.trim() || loading) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: prompt,
      },
    ]);

    setLoading(true);

    try {
      const response = await generateTravelPlan(prompt);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "❌ Failed to generate response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Hero AI Search
  useEffect(() => {
    if (!heroPrompt) return;

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    handleGenerate(heroPrompt);
  }, [heroPrompt]);

  return (
    <section
      ref={sectionRef}
      className="ai-section"
    >
      <div className="ai-container">
        <div className="ai-left">
          <span className="ai-tag">
            ARGUS AI
          </span>

          <h2>
            Your Personal
            <br />
            AI Travel Companion
          </h2>

          <p>
            Ask anything about your next journey.
            ARGUS intelligently recommends flights,
            hotels, attractions, restaurants,
            weather and complete travel itineraries.
          </p>

          <PromptInput
            onGenerate={handleGenerate}
            loading={loading}
          />
        </div>

        <div className="ai-right">
          <ChatWindow
            messages={messages}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}