import "../styles/components/title-info-line.css";

export default function TitleInfoLine({ title }) {
  // separate by type
  const isSerie = title.type === "serie";
  const isFilmOrDoc = title.type !== "serie";

  const seasons = title.seasons;
  const productionYear = title.releaseYear;

  // duration (film or doc)
  let hours = Math.floor(title.duration / 60);
  let minutes = title.duration % 60;

  // match percentage
  let randomPercentage = Math.floor(Math.random() * 100);

  return (
    <div className="info-line-container">
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
      </div>
    </div>
  );
}
