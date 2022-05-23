import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TitleCard from "../components/TitleCard";
import "../styles/pages/user-dashboard.css";

export default function UserDashboard() {
  function shoutout() {
    console.log("Clicked play!");
  }
  return (
    <div>
      <Navbar />
      <Header loadItem={shoutout} />
      <div className="row">
        <h2>Future component row</h2>
        <TitleCard />
      </div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      voluptate. Vel, nihil incidunt sequi cupiditate, dolore placeat quo quam
      quidem iusto ex perferendis ab facere aspernatur eligendi eaque eum
      provident.
      <Footer />
    </div>
  );
}
