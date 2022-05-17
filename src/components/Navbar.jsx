import logo from "../assets/icons-netflix/logo-navbar.png";
import mag from "../assets/icons/search-icon.png";
import bell from "../assets/icons/notification-icon.png";
import userArrow from "../assets/icons/user-arrow.png";
import userImg from "../assets/images/user-profile.png";
import "../styles/components/navbar.css";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBackgroundColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    // adding the event to listen to the scroll and call the change
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <nav className={isScrolled ? "navigation-bar scrolled" : "navigation-bar"}>
      <div className="logo-navigation-container">
        <img src={logo} alt="Nättflix website" className="netflix-logo" />
        <ul className="list-navigation">
          <li className="navigation-focus">Home</li>
          <li>Series</li>
          <li>Films</li>
          <li>New & Popular</li>
          <li>My list</li>
        </ul>
      </div>
      <div>
        <ul className="secondary-navigation">
          <li>
            <img src={mag} alt="search" className="secondary-icons" />
          </li>
          <li>
            <img src={bell} alt="notifications" className="secondary-icons" />
          </li>
          <li className="user-options">
            <img src={userImg} alt="" className="user-avatar" />{" "}
            <img src={userArrow} alt="" className="user-arrow-options" />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
