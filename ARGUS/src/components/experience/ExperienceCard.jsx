export default function ExperienceCard({
  image,
  title,
  country,
  description,
}) {
  return (
    <div className="experience-card">

      <img
        src={image}
        alt={title}
      />

      <div className="experience-overlay">

        <span>{country}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button>
          Experience →
        </button>

      </div>

    </div>
  );
}