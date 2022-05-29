import plusIcon from "../assets/icons/plus.png";
import { useUserId } from "../state/UserIdContext";
import "../styles/components/add-to-list-button.css";

export default function AddToListButton({ title }) {
  const { addTitleToMyList } = useUserId();
  return (
    <button className="button-circle" onClick={() => addTitleToMyList(title)}>
      <img src={plusIcon} alt="add to my list" className="icon-size" />
    </button>
  );
}
