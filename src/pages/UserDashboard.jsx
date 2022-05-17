import Header from "../components/Header";
import "../styles/pages/user-dashboard.css";

export default function UserDashboard() {
  function shoutout() {
    console.log("Clicked play!");
  }
  return (
    <div>
      <Header loadItem={shoutout} />
      <h1>Hello</h1>
    </div>
  );
}
