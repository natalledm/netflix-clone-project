import { Link } from "react-router-dom";
import playIcon from "../assets/icons/play-icon.png";
import "../styles/components/play-buttons.css";

export default function PlayButton({ videoId, iconOnly }) {
  return (
    <>
      {iconOnly ? (
        <Link to={`/watch/${videoId}`} className="play-button-circle">
          <img src={playIcon} alt="play title" className="icon-play" />
        </Link>
      ) : (
        <Link to={`/watch/${videoId}`} className="play-button-long">
          <img src={playIcon} alt="" />
          Play
        </Link>
      )}
    </>
  );
}
