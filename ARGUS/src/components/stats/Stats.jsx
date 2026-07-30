import "./Stats.css";

const stats = [
  {
    number: "195+",
    title: "Countries",
  },
  {
    number: "2M+",
    title: "Flights",
  },
  {
    number: "850K+",
    title: "Hotels",
  },
  {
    number: "99%",
    title: "Traveler Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="stats">

      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}