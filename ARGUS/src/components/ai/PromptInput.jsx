import { useState } from "react";

export default function PromptInput({
  onGenerate,
  loading,
}) {
  const [prompt, setPrompt] = useState("");

  function handleClick() {
    if (!prompt.trim()) return;

    onGenerate(prompt);

    setPrompt("");
  }

  return (
    <div className="prompt-box">

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Plan a 7-day trip to Japan with a budget of $3000..."
      />

      <button
        className="generate-btn"
        onClick={handleClick}
        disabled={loading}
      >
        {loading
          ? "Generating..."
          : "✨ Generate with ARGUS AI"}
      </button>

    </div>
  );
}