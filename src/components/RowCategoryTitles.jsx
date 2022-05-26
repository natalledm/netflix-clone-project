import TitleCard from "./TitleCard";
import "../styles/components/row-category-titles.css";

export default function RowCategoryTitles({ category, titles }) {
  return (
    <div className="row-container">
      <h2 className="row-category-title">{category}</h2>
      <div className="title-card-container">
        {titles.map((title) => {
          return (
            <span key={title.id}>
              <TitleCard title={title} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
