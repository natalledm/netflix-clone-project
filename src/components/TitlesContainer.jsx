import { useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStoreDB";
import RowCategoryTitles from "./RowCategoryTitles";

export default function TitlesContainer() {
  const [titles, setTitles] = useState([]);

  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [docs, setDocs] = useState([]);
  // const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);
      setTitles(data);
    }
    loadData("titles");
  }, []);

  useEffect(() => {
    const seriesList = titles.filter((title) => title.type === "serie");
    const docsList = titles.filter((title) => title.type === "doc");
    const filmsList = titles.filter(({ type }) => type === "film");

    setSeries(seriesList);
    setDocs(docsList);
    setFilms(filmsList);
  }, [titles]);

  return (
    <div>
      <RowCategoryTitles category={"films"} titles={films} />
      <RowCategoryTitles category={"docs"} titles={docs} />
      <RowCategoryTitles category={"series"} titles={series} />
    </div>
  );
}
