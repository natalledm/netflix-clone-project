import playIcon from "../assets/icons/play-icon.png";
import "../styles/components/layout/buttons.css";

export default function PlayButton({ loadItem }) {
  return (
    <button onClick={loadItem} className="play-button">
      <img src={playIcon} alt="" />
      Play
    </button>
  );
}
