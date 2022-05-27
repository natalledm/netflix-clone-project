import "../styles/components/title-card-modal.css";
import ModalHeader from "./ModalHeader";
import ModalInfoSection from "./ModalInfoSection";

export default function TitleCardModal({ toggleModal, title, titleToList }) {
  return (
    <div>
      <div className="background-layover" onClick={toggleModal}></div>
      <div className="modal-layer">
        <div className="modal-content">
          <ModalHeader
            title={title}
            toggleModal={toggleModal}
            titleToList={titleToList}
          />
          <div className="modal-content-info">
            <ModalInfoSection title={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
