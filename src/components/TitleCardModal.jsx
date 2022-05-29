import { useState } from "react";
import YoutubeVideo from "./YoutubeVideo";
import ModalHeader from "./ModalHeader";
import ModalInfoSection from "./ModalInfoSection";
import "../styles/components/title-card-modal.css";
import "../styles/components/modal-info-section.css";

export default function TitleCardModal({ toggleModal, title, titleToList }) {
  const [openYoutube, setOpenYoutube] = useState(false);

  const toggleYoutube = () => setOpenYoutube(!openYoutube);

  return (
    <div>
      <div className="background-layover" onClick={toggleModal}></div>
      {openYoutube && <YoutubeVideo embedId={title.videoId} />}
      <div className="modal-layer">
        <div className="modal-content">
          <ModalHeader
            title={title}
            toggleModal={toggleModal}
            titleToList={titleToList}
            toggleYoutube={toggleYoutube}
          />

          <div className="modal-content-info">
            <ModalInfoSection title={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
