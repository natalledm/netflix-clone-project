import close from "../assets/icons/close.png";
import playIcon from "../assets/icons/play-icon.png";
import plusIcon from "../assets/icons/plus.png";
import like from "../assets/icons/like.png";
import "../styles/components/modal-header.css";

export default function ModalHeader({ toggleModal, title, titleToList }) {
  const { name, backgroundImage } = title;
  return (
    <div className="modal-header">
      <img src={backgroundImage} alt="" className="title-image" />
      <button className="close-button" onClick={toggleModal}>
        <img src={close} alt="close popup" />
      </button>
      <div className="modal-play-info">
        <h1 className="modal-play-title">{name}</h1>
        <div className="modal-play-buttons">
          <button className="button-play">
            <img src={playIcon} alt="play title" className="icon-size-modal" />
            <span>Play</span>
          </button>
          <button className="button-circle-modal" onClick={titleToList}>
            <img
              src={plusIcon}
              alt="add to my list"
              className="icon-size-modal"
            />
          </button>
          <button className="button-circle-modal">
            <img src={like} alt="like title" className="icon-size-modal" />
          </button>
        </div>
      </div>
    </div>
  );
}
