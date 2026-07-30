import "./AIPlanner.css";

export default function AIPlanner() {
  return (
    <section className="planner">

      <div className="planner-container">

        {/* LEFT */}

        <div className="planner-left">

          <span className="planner-tag">
            AI TRAVEL PLANNER
          </span>

          <h2>
            Let AI Build Your
            <br />
            Perfect Journey
          </h2>

          <p>
            Tell ARGUS where you want to go and our AI
            instantly creates a complete itinerary including
            flights, hotels, restaurants, attractions and
            weather forecasts.
          </p>

          <button className="planner-btn">
            Start Planning →
          </button>

        </div>

        {/* RIGHT */}

        <div className="planner-right">

          <div className="planner-window">

            <div className="window-header">

              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

              <h4>ARGUS AI Planner</h4>

            </div>

            <div className="chat">

              <div className="message user">
                ✈️ Plan a 5-day trip to Japan
              </div>

              <div className="message ai">

                <h5>5 Day Japan Adventure 🇯🇵</h5>

                <ul>

                  <li>Day 1 • Tokyo City Tour</li>

                  <li>Day 2 • Mt Fuji & Lake Kawaguchi</li>

                  <li>Day 3 • Kyoto Temples</li>

                  <li>Day 4 • Osaka Food Walk</li>

                  <li>Day 5 • Shopping & Departure</li>

                </ul>

                <div className="planner-info">

                  <div>
                    ☀️ 24°C
                  </div>

                  <div>
                    💰 $1450
                  </div>

                  <div>
                    ⭐ 4.9
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}