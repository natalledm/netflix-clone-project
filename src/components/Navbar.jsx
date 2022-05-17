import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <img src={logo} alt="Nättflix website" className="logo" />
        </div>
        <div className="list-container">
          <ul className="list">
            <li>Home</li>
            <li>Series</li>
            <li>Films</li>
            <li>New & Popular</li>
            <li>My list</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Search</li>
          <li>Notification</li>
          <li>User</li>
        </ul>
      </div>
    </nav>
  );
}
