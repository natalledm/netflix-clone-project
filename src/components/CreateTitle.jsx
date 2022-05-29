import InputField from "./InputField";
import { useState, useEffect } from "react";
import { addDocument, getCollection } from "../scripts/fireStoreDB";
import { stringToArray } from "../scripts/stringToArray";
import form from "../data/title-structure.json";
import "../styles/components/create-title.css";

export default function CreateTitle() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [videoId, setVideoId] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [titleType, setTitleType] = useState("");

  const [duration, setDuration] = useState(0);
  const [releaseYear, setReleaseYear] = useState(0);
  const [seasons, setSeasons] = useState(0);

  const chooseTypeFields = () => {
    if (titleType === "serie") {
      return (
        <InputField fieldInfo={form.seasons} state={[seasons, setSeasons]} />
      );
    } else {
      return (
        <>
          <InputField
            fieldInfo={form.duration}
            state={[duration, setDuration]}
          />
          <InputField
            fieldInfo={form.releaseYear}
            state={[releaseYear, setReleaseYear]}
          />
        </>
      );
    }
  };

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [titles, setTitles] = useState([]);

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

  async function onSubmit(event) {
    event.preventDefault();
    const maybeHasTitle = titles.find((title) => {
      if (title.name === name) {
        return true;
      } else {
        return false;
      }
    });

    if (maybeHasTitle !== undefined) {
      alert(
        "This title already exists or have the same name as another title!",
      );
      console.error(
        "This title already exists or have the same name as another title!",
      );
      setIsSuccessful(false);
      resetForm();
      return;
    }

    const keywordsArray = stringToArray(keywords);

    const newTitle = {
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
      await addDocument("titles", newTitle);
      setIsSuccessful(true);
    } catch (error) {
      console.log("The error was:", error);
    }
    resetForm();
  }

  function resetForm() {
    setName("");
    setDescription("");
    setBackgroundImage("");
    setKeywords("");
    setReleaseYear(0);
    setDuration(0);
    setSeasons(0);
    setThumbnail("");
  }

  return (
    <div className="create-title-container">
      <h1>Create a title</h1>
      <div>
        {isSuccessful ? (
          <h1 className="title-created">Title created!</h1>
        ) : null}
        <div className="type-selection-container">
          <h2>Choose the type of the title:</h2>
          <div
            onChange={(event) => setTitleType(event.target.value)}
            className="choose-type"
          >
            <span>
              <input type="radio" value="film" name="type" /> Film
            </span>
            <span>
              <input type="radio" value="doc" name="type" /> Documentary
            </span>
            <span>
              <input type="radio" value="serie" name="type" /> Serie
            </span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="form-create-title">
          <InputField fieldInfo={form.name} state={[name, setName]} />
          <InputField
            fieldInfo={form.description}
            state={[description, setDescription]}
          />
          <InputField
            fieldInfo={form.keywords}
            state={[keywords, setKeywords]}
          />
          <InputField fieldInfo={form.videoId} state={[videoId, setVideoId]} />
          <InputField
            fieldInfo={form.thumbnail}
            state={[thumbnail, setThumbnail]}
          />
          <InputField
            fieldInfo={form.backgroundImage}
            state={[backgroundImage, setBackgroundImage]}
          />
          {chooseTypeFields()}
          <button className="create-title-button">Submit</button>
        </form>
        {isSuccessful ? (
          <h1 className="title-created">Title created!</h1>
        ) : null}
      </div>
    </div>
  );
}
