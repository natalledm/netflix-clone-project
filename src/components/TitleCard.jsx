import Modal from "./Modal";

// import thumbnailTest from "../assets/images/thumbnail-the-bridge.png";
import playIcon from "../assets/icons/play-icon.png";
import infoArrow from "../assets/icons/arrow-down-info.png";
import plusIcon from "../assets/icons/plus.png";
import like from "../assets/icons/like.png";
import "../styles/components/title-card.css";
import { useState } from "react";
import TitleCardModal from "./TitleCardModal";

export default function TitleCard({ title }) {
  const [showModal, setShowModal] = useState(false);

  if (title === undefined) {
    return null;
  }

  const { thumbnail, keywords } = title;
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="title-card">
      <img src={thumbnail} alt="name here" className="thumbnail-card-img" />
      <div className="title-info-container hide-info">
        <div className="buttons-container">
          <span>
            <button className="button-circle" id="play-filled">
              <img src={playIcon} alt="play title" className="icon-size" />
            </button>
            <button className="button-circle">
              <img src={plusIcon} alt="add to my list" className="icon-size" />
            </button>
            <button className="button-circle">
              <img src={like} alt="like title" className="icon-size" />
            </button>
          </span>
          <span>
            <button
              className="button-circle button-info"
              title="More info"
              onClick={toggleModal}
            >
              <img src={infoArrow} alt="View more info" className="icon-size" />
            </button>
          </span>
        </div>
        {keywords !== undefined &&
          keywords.map((keyword) => <span key={keyword}>• {keyword}</span>)}
      </div>
      <Modal>{showModal && <TitleCardModal toggleModal={toggleModal} />}</Modal>
    </div>
  );
}
