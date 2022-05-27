import "../styles/components/modal-info-section.css";

export default function ModalInfoSection({ title }) {
  // separate by type
  const isSerie = title.type === "serie";
  const isFilmOrDoc = title.type !== "serie";

  // infos
  const genres = title.keywords.map((keyword) => (
    <span key={keyword}>{keyword}</span>
  ));
  const seasons = title.seasons;
  const productionYear = title.releaseYear;

  // duration (film or doc)
  let hours = Math.floor(title.duration / 60);
  let minutes = title.duration % 60;

  // match percentage
  let randomPercentage = Math.floor(Math.random() * 100);

  return (
    <div className="content-container">
      <div className="content-time-series-description">
        <div className="content-time-seasons">
          <span className="match-percent">{randomPercentage}% Match</span>
          <span>{productionYear}</span>
          <span className="age">16+</span>
          {isFilmOrDoc && (
            <span>
              {hours}h {minutes}m
            </span>
          )}
          {isSerie && <span>{`${seasons} Seasons`}</span>}
          <span className="hd">HD</span>
        </div>
        <div className="title-description">
          <p>{title.description}</p>
        </div>
      </div>
      <div className="content-extra-info">
        <section>
          <strong className="content-extra-info-label">Genres:</strong>
          {genres}
        </section>
        <section>
          <strong className="content-extra-info-label">
            This {title.type} is:
          </strong>
          {genres}
        </section>
      </div>
    </div>
  );
}
