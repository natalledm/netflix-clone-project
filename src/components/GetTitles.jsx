import { useState, useEffect } from "react";
import { findTitlesByType, getCollection } from "../scripts/fireStoreDB";
import "../styles/components/get-titles.css";

export default function GetTitles() {
  const [titleType, setTitleType] = useState("");
  const [titles, setTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);

  // get entire collection
  useEffect(() => {
    async function loadData(path) {
      const titlesDB = await getCollection(path);

      const titlesIds = titlesDB.map((title) => {
        return title.id;
      });

      setTitles(titlesIds);
    }
    loadData("titles");
  }, []);

  // get specific titles
  useEffect(() => {
    async function findTitles(type) {
      const foundTitles = await findTitlesByType(type);

      setFilteredTitles(foundTitles);
    }
    findTitles(titleType);
  }, [titleType, titles]);

  function showFilteredTitles() {
    const titlesByType = filteredTitles.map((title) => (
      <li key={title.id} className="title-card-list-item">
        <img src={title.thumbnail} alt="" className="title-thumbnail" />
        {title.name}
      </li>
    ));

    return <ul>{titlesByType}</ul>;
  }

  return (
    <div className="get-titles-container">
      <h1>Current titles</h1>
      <div>
        <label htmlFor="type-selection">Select type: </label>
        <select
          name="type-selection"
          id="type-selection"
          onChange={(event) => setTitleType(event.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="film">Film</option>
          <option value="doc">Documentary</option>
          <option value="serie">Serie</option>
        </select>
      </div>
      <div className="title-card-list">
        {filteredTitles.length > 0 ? (
          showFilteredTitles()
        ) : (
          <p>No titles with this type</p>
        )}
      </div>
    </div>
  );
}
