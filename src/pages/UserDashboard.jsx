import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";

export default function UserDashboard() {
  function shoutout() {
    console.log("Clicked play!");
  }
  return (
    <div>
      <Navbar />
      <Header loadItem={shoutout} />
      <MainContent />
      <Footer />
    </div>
  );
}
