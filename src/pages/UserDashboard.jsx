import Header from "../components/Header";
import TitleCard from "../components/TitleCard";
import "../styles/pages/user-dashboard.css";

export default function UserDashboard() {
  function shoutout() {
    console.log("Clicked play!");
  }
  return (
    <div>
      <Header loadItem={shoutout} />
      <div className="row">
        <h2>Future component row</h2>
        <TitleCard />
      </div>
    </div>
  );
}
