import { useState, useEffect } from "react";
import {
  deleteDocument,
  findTitlesByType,
  getCollection,
} from "../scripts/fireStoreDB";
import { Link } from "react-router-dom";
import trash from "../assets/icons/delete.png";
import edit from "../assets/icons/edit.png";
import "../styles/components/get-titles.css";

export default function GetTitles() {
  const [titleType, setTitleType] = useState("");
  const [titles, setTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState(false);

  // get entire collection
  useEffect(() => {
    async function loadData(path) {
      const titlesDB = await getCollection(path);

      const titlesIds = titlesDB.map((title) => {
        return title.id;
      });

      setTitles(titlesIds);
      setIsRefreshNeeded(false);
    }
    loadData("titles");
  }, [isRefreshNeeded]);

  // get specific titles
  useEffect(() => {
    async function findTitles(type) {
      const foundTitles = await findTitlesByType(type);

      setFilteredTitles(foundTitles);
    }
    findTitles(titleType);
  }, [titleType, titles]);

  function getClickedValueAndDelete(title) {
    if (window.confirm(`Do you really want to delete ${title.name}?`)) {
      deleteDocument("titles", title.id);
      alert(`${title.name} ${title.type} deleted`);
      setIsRefreshNeeded(true);
    } else {
      console.log("not deleted");
    }
  }

  function showFilteredTitles() {
    const titlesByType = filteredTitles.map((title) => (
      <li key={title.id} className="title-card-list-item">
        <img src={title.thumbnail} alt="" className="title-thumbnail" />
        {title.name}
        <div className="buttons-title">
          <button
            onClick={() => getClickedValueAndDelete(title)}
            className="delete-button"
          >
            <img src={trash} alt="" />
          </button>
          <button>
            <Link to={"/admin/edit/" + title.id} className="edit-link">
              <img src={edit} alt="" />
            </Link>
          </button>
        </div>
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
