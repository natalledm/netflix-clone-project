import backgroundImg from "../assets/images/season2-russian-doll.jpg";
import PlayButton from "../components/PlayButton";

export default function UserDashboard() {
  function shoutout() {
    console.log("Clicked play!");
  }

  return (
    <header>
      <div>
        <img src={backgroundImg} alt="season 1 russian doll series" />
        <PlayButton loadItem={shoutout} />
      </div>
    </header>
  );
}
