import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editDocument, getDocument } from "../scripts/fireStoreDB";
import { arrayToString, stringToArray } from "../scripts/stringToArray";
import { Link } from "react-router-dom";
import "../styles/pages/edit-page.css";

export default function EditPage() {
  const { videoId } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [titleType, setTitleType] = useState("film");

  const [duration, setDuration] = useState(0);
  const [releaseYear, setReleaseYear] = useState(0);
  const [seasons, setSeasons] = useState(0);

  const [isRefreshNedded, setIsRefreshNeeded] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSerie, setIsSerie] = useState(false);

  useEffect(() => {
    async function getTitle(videoId) {
      const titleDB = await getDocument("titles", videoId);
      //set title properties
      setProperties(titleDB);
      setIsRefreshNeeded(false);
    }
    getTitle(videoId);
  }, [videoId, isRefreshNedded]);

  function setProperties(title) {
    setName(title.name);
    setDescription(title.description);
    setThumbnail(title.thumbnail);
    setBackgroundImage(title.backgroundImage);
    setTitleType(title.type);
    setDuration(title.duration);
    setReleaseYear(title.releaseYear);
    setSeasons(title.seasons);

    setKeywords(arrayToString(title.keywords));
  }

  const selectOptions = [
    { key: "film", value: "film", text: "Film" },
    { key: "doc", value: "doc", text: "Documentary" },
    { key: "serie", value: "serie", text: "Serie" },
  ];

  useEffect(() => {
    setIsSerie(false);
    if (titleType === "serie") {
      setIsSerie(true);
    }
  }, [isSerie, titleType]);

  async function onSubmit(event) {
    event.preventDefault();

    const keywordsArray = stringToArray(keywords);

    const editedTitle = {
      name: name,
      description: description,
      keywords: keywordsArray,
      videoId: videoId,
      thumbnail: thumbnail,
      backgroundImage: backgroundImage,
      type: titleType,
      duration: duration,
      releaseYear: releaseYear,
      seasons: seasons,
    };

    try {
      await editDocument("titles", editedTitle, videoId);
      setIsRefreshNeeded(true);
      setIsSuccessful(true);
    } catch (error) {
      console.log(error);
      setIsRefreshNeeded(false);
      setIsSuccessful(false);
    }
  }

  return (
    <div className="edit-title-container">
      <h1 className="edit-main-title">
        Edit <span className="color-red">{name}</span> title:
      </h1>
      {isSuccessful ? <h3 className="title-updated">Course updated!</h3> : null}
      <form onSubmit={onSubmit} className="edit-form">
        <div>
          <p className="type-explanation">
            Attention: The current type is{" "}
            <span className="color-red">{titleType}</span>. Choose below if you
            want to change.
          </p>
          <label htmlFor="select-type">Select type:</label>
          <select
            value={titleType}
            onChange={(event) => setTitleType(event.target.value)}
          >
            {selectOptions.map((option) => {
              return (
                <option value={option.value} key={option.key}>
                  {option.text}
                </option>
              );
            })}
          </select>
        </div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          type="textarea"
          id="description"
          value={description}
          row="5"
          cols="5"
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="keywords">Keywords:</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="text"
          id="thumbnail"
          value={thumbnail}
          onChange={(event) => setThumbnail(event.target.value)}
        />
        <label htmlFor="backgroundImage">Background Image:</label>
        <input
          type="text"
          id="backgroundImage"
          value={backgroundImage}
          onChange={(event) => setBackgroundImage(event.target.value)}
        />
        {isSerie ? (
          <div>
            <label htmlFor="seasons">Seasons:</label>
            <input
              type="number"
              id="seasons"
              value={seasons}
              onChange={(event) => setSeasons(event.target.value)}
            />
          </div>
        ) : (
          <div>
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
            <label htmlFor="year">Release Year:</label>
            <input
              type="number"
              id="year"
              value={releaseYear}
              onChange={(event) => setReleaseYear(event.target.value)}
            />
          </div>
        )}
        <button className="submit-button" id="submit-edit-button">
          Submit
        </button>
        {isSuccessful ? (
          <h3 className="title-updated">Course updated!</h3>
        ) : null}
      </form>

      <Link to={"/admin"} className="admin-link">
        Back to Admin Page
      </Link>
    </div>
  );
}
