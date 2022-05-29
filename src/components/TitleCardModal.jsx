import { useState } from "react";
import YoutubeVideo from "./YoutubeVideo";
import ModalHeader from "./ModalHeader";
import ModalInfoSection from "./ModalInfoSection";
import SerieSeasons from "./SerieSeasons";
import "../styles/components/title-card-modal.css";

export default function TitleCardModal({ toggleModal, title }) {
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
            toggleYoutube={toggleYoutube}
          />

          <div className="modal-content-info">
            <ModalInfoSection title={title} />
          </div>
          {title.type === "serie" ? (
            <div className="modal-content-info">
              <SerieSeasons title={title} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
