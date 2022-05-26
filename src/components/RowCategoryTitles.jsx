import TitleCard from "./TitleCard";

export default function RowCategoryTitles({ category, titles }) {
  return (
    <section>
      <h2>{category}</h2>
      {titles.map((title) => {
        return (
          <span>
            <TitleCard title={title} />
          </span>
        );
      })}
    </section>
  );
}
