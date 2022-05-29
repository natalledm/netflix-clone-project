import { Link } from "react-router-dom";
import "../styles/components/episode-row.css";

export default function EpisodeRow({ episode }) {
  const { episodeNum, name, thumbnail, description, duration, videoId } =
    episode;

  return (
    <Link to={`/watch/${videoId}`} className="episode-row">
      <p>{episodeNum}</p>
      <img src={thumbnail} alt="" className="epi-img" />
      <div>
        <p className="epi-name">{name}</p>
        <p>{description}</p>
      </div>
      <p>{duration}m</p>
    </Link>
  );
}
