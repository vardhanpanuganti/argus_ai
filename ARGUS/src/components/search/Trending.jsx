import "./Trending.css";

const items = [
  "Japan",
  "Bali",
  "Switzerland",
  "Dubai",
  "Iceland",
  "Paris"
];

export default function Trending() {
  return (
    <div className="trending">

      <span className="title">
        Trending
      </span>

      {items.map((item) => (
        <button
          key={item}
          className="chip"
        >
          {item}
        </button>
      ))}

    </div>
  );
}