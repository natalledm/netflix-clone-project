import { useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStoreDB";
import { useUserId } from "../state/UserIdContext";
import RowCategoryTitles from "./RowCategoryTitles";
import "../styles/components/main-content.css";

export default function MainContent() {
  const user = useUserId();

  const [titles, setTitles] = useState([]);

  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [docs, setDocs] = useState([]);
  const [myList, setMyList] = useState([]);

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

  useEffect(() => {
    const userList = user.userInfo.userList;
    if (userList === undefined) return;

    const userFilteredList = titles.filter((title) =>
      userList.includes(title.id),
    );

    setMyList(userFilteredList);
  }, [titles, user]);

  return (
    <div className="main-container">
      <div className="my-list-container">
        {myList !== undefined && (
          <RowCategoryTitles category={"My List"} titles={myList} />
        )}
      </div>
      <section className="main-content">
        <RowCategoryTitles category={"Films"} titles={films} />
        <RowCategoryTitles category={"Documentaries"} titles={docs} />
        <RowCategoryTitles category={"Series"} titles={series} />
      </section>
    </div>
  );
}
