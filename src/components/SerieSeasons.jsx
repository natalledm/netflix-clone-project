import { useState, useEffect } from "react";
import { getCollection } from "../scripts/fireStoreDB";

export default function SerieSeasons({ title }) {
  const [refreshNeeded, setRefreshNeeded] = useState(false);
  const [season, setSeason] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1);

  const { id, name } = title;

  useEffect(() => {
    async function loadData(path) {
      const seasonDB = await getCollection(path);
      setSeason(seasonDB);
      setRefreshNeeded(false);
      console.log(seasonDB);
    }
    loadData(`titles/${id}/s0${seasonNumber}`);
  }, [refreshNeeded, seasonNumber, id]);

  return (
    <div className="view-seasons">
      <div className="header-select">
        <h2>Episodes</h2>
        <div className="select-container">
          <select
            name="season-selection"
            id="season-selection"
            onChange={(event) => setSeasonNumber(event.target.value)}
          >
            <option value="1">Season 1</option>
            <option value="2">Season 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}
