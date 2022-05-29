import { useState, useEffect } from "react";
import { getCollection } from "../scripts/fireStoreDB";
import "../styles/components/serie-seasons.css";
import EpisodeRow from "./EpisodeRow";

export default function SerieSeasons({ title }) {
  const [refreshNeeded, setRefreshNeeded] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1);

  const { id } = title;

  useEffect(() => {
    async function loadData(path) {
      const episodesDB = await getCollection(path);
      episodesDB.sort((episodeOne, episodeTwo) => {
        if (episodeOne.episodeNum > episodeTwo.episodeNum) {
          return 1;
        } else {
          return -1;
        }
      });
      setEpisodes(episodesDB);
      setRefreshNeeded(false);
    }
    loadData(`titles/${id}/s0${seasonNumber}`);
  }, [refreshNeeded, seasonNumber, id]);

  const episodesElements = episodes.map((episode) => (
    <span key={episode.id}>
      <EpisodeRow episode={episode} />
    </span>
  ));

  return (
    <div className="view-seasons-container">
      <div className="header-select">
        <h2>Episodes</h2>
        <div className="select-container">
          <select
            className="select-dropdown"
            name="season-selection"
            id="season-selection"
            onChange={(event) => setSeasonNumber(event.target.value)}
          >
            <option value="1">Season 1</option>
            <option value="2">Season 2</option>
          </select>
        </div>
      </div>
      <div className="season-rows-container">{episodesElements}</div>
    </div>
  );
}
