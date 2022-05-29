import { useState } from "react";
import TitleCardModal from "./TitleCardModal";
import TitleInfoLine from "./TitleInfoLine";
import PlayButton from "./PlayButton";
import Modal from "./Modal";
import infoArrow from "../assets/icons/arrow-down-info.png";
import like from "../assets/icons/like.png";
import "../styles/components/title-card.css";
import AddToListButton from "./AddToListButton";

export default function TitleCard({ title }) {
  const [showModal, setShowModal] = useState(false);

  if (title === undefined) {
    return null;
  }

  const { thumbnail, keywords, videoId } = title;

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="title-card">
      <img src={thumbnail} alt="name here" className="thumbnail-card-img" />
      <div className="title-info-container hide-info">
        <div className="buttons-container">
          <span>
            <PlayButton videoId={videoId} iconOnly />
            <AddToListButton title={title} />
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
        <div className="title-card-info-line-container">
          <TitleInfoLine title={title} />
          <ul className="genre-keywords">
            {keywords !== undefined &&
              keywords.map((keyword) => (
                <li key={keyword} className="keyword">
                  {keyword}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Modal>
        {showModal && (
          <TitleCardModal toggleModal={toggleModal} title={title} />
        )}
      </Modal>
    </div>
  );
}
