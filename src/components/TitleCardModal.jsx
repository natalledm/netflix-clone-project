import "../styles/components/title-card-modal.css";

export default function TitleCardModal({ toggleModal }) {
  return (
    <div>
      <div className="background-layover" onClick={toggleModal}></div>
      <div className="modal-layer">
        <h1>HELLO</h1>
      </div>
    </div>
  );
}
