import "./LoadingScreen.css";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);

        setTimeout(() => {
          onFinish();
        }, 600);
      }

      setProgress(value);
    }, 70);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">

      <div className="loading-content">

        <div className="loading-logo">
          <div className="loading-dot"></div>
          <h1>ARGUS</h1>
        </div>

        <p className="loading-text">
          {progress < 35
            ? "Initializing AI..."
            : progress < 70
            ? "Loading Earth..."
            : "Preparing Your Journey..."}
        </p>

        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="loading-percent">{progress}%</span>

      </div>

    </div>
  );
}