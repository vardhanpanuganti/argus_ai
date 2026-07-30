import "./GlassCards.css";

export default function GlassCards() {
  return (
    <>
      <div className="glass-card card1">
        <h4>🇯🇵 Tokyo</h4>
        <p>4.9 ★ Rating</p>
        <span>542 Flights Today</span>
      </div>

      <div className="glass-card card2">
        <h4>🇫🇷 Paris</h4>
        <p>26°C</p>
        <span>Perfect Weather</span>
      </div>

      <div className="glass-card card3">
        <h4>🇮🇸 Iceland</h4>
        <p>Aurora Forecast</p>
        <span>Excellent Tonight</span>
      </div>
    </>
  );
}