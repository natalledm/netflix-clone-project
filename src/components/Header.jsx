import backgroundImg from "../assets/images/season2-russian-doll.png";
import infoIcon from "../assets/icons/info-icon.png";
import iconN from "../assets/icons-netflix/n-24.png";
import "../styles/components/header.css";
import PlayButton from "./PlayButton";

export default function Header() {
  return (
    <header className="header-container">
      <img
        src={backgroundImg}
        alt="season 1 russian doll series"
        className="main-background-hero"
      />

      <div className="hero-info-container">
        <div className="hero-info-type-container">
          <img src={iconN} alt="" className="icon-n" />
          <span className="info-type">Series</span>
        </div>
        <h1 className="hero-title">Russian Doll</h1>
        <div>
          <p className="info-synopsis">
            Nadia keeps dying and reliving her 36th birthday party. She's
            trapped in a surreal time loop -- and staring down the barrel of her
            own mortality.
          </p>
        </div>
        <div className="hero-links-buttons">
          <PlayButton videoId={"dQw4w9WgXcQ"} />
          <button className="more-info-button">
            <img src={infoIcon} alt="" /> More Info
          </button>
        </div>
      </div>
    </header>
  );
}
