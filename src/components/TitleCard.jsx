import { useState } from "react";
import TitleCardModal from "./TitleCardModal";
import TitleInfoLine from "./TitleInfoLine";
import PlayButton from "./PlayButton";
import Modal from "./Modal";
import infoArrow from "../assets/icons/arrow-down-info.png";
import plusIcon from "../assets/icons/plus.png";
import like from "../assets/icons/like.png";
import "../styles/components/title-card.css";

export default function TitleCard({ title }) {
  const [showModal, setShowModal] = useState(false);
  const [titleId, setTitleId] = useState("");

  if (title === undefined) {
    return null;
  }

  const { thumbnail, keywords, id, videoId } = title;
  const toggleModal = () => setShowModal(!showModal);
  function titleToList() {
    setTitleId(id);
    console.log(titleId);
  }

  return (
    <div className="title-card">
      <img src={thumbnail} alt="name here" className="thumbnail-card-img" />
      <div className="title-info-container hide-info">
        <div className="buttons-container">
          <span>
            <PlayButton videoId={videoId} iconOnly />
            <button className="button-circle" onClick={titleToList}>
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
          <TitleCardModal
            toggleModal={toggleModal}
            title={title}
            titleToList={titleToList}
          />
        )}
      </Modal>
    </div>
  );
}
