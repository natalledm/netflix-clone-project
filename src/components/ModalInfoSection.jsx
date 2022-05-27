import "../styles/components/modal-info-section.css";

export default function ModalInfoSection({ title }) {
  // separate by type
  const isSerie = title.type === "serie";
  const isFilmOrDoc = title.type !== "serie";

  // infos
  const genres = title.keywords.map((keyword) => (
    <span key={keyword}>{keyword}, </span>
  ));
  const seasons = title.seasons;
  const productionYear = title.releaseYear;
  const age = title.age;

  // duration (film or doc)
  let hours = Math.floor(title.duration / 60);
  let minutes = title.duration % 60;

  // match percentage
  let randomPercentage = Math.floor(Math.random() * 100);

  return (
    <div className="content-container">
      <div className="content-time-series-description">
        <div className="content-time-seasons">
          {isFilmOrDoc && (
            <span className="match-percent">{randomPercentage}% Match</span>
          )}
          <span>{productionYear}</span>
          <span>{age}+</span>
          {isFilmOrDoc && (
            <span>
              {hours}h {minutes}m
            </span>
          )}
          {isSerie && <span>{`${seasons} Seasons`}</span>}
          <span>HD</span>
        </div>
        <div>
          <p>{title.description}</p>
        </div>
      </div>
      <div className="content-extra-info">
        <section>Genres: {genres}</section>
        <section>
          This {title.type} is: {genres}
        </section>
      </div>
    </div>
  );
}
