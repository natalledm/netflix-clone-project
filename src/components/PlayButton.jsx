import playIcon from "../assets/icons/play-icon.png";
import "../styles/components/play-buttons.css";

export default function PlayButton({ loadItem }) {
  return (
    <button onClick={loadItem} className="play-button-long">
      <img src={playIcon} alt="" />
      Play
    </button>
  );
}
