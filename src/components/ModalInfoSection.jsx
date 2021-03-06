import "../styles/components/modal-info-section.css";
import TitleInfoLine from "./TitleInfoLine";

export default function ModalInfoSection({ title }) {
  // infos
  const genres = title.keywords.map((keyword) => (
    <span key={keyword}>{keyword}</span>
  ));

  return (
    <div className="content-container">
      <div>
        <span className="info-line-modal">
          <TitleInfoLine title={title} />
        </span>
        <p>{title.description}</p>
      </div>

      <div className="content-extra-info">
        <section>
          <strong className="content-extra-info-label">Genres:</strong>
          {genres}
        </section>
        <section>
          <strong className="content-extra-info-label">
            This {title.type} is:
          </strong>
          {genres}
        </section>
      </div>
    </div>
  );
}
