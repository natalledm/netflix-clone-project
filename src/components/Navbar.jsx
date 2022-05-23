import logo from "../assets/icons-netflix/logo-navbar.png";
import mag from "../assets/icons/search-icon.png";
import bell from "../assets/icons/notification-icon.png";
import userArrow from "../assets/icons/user-arrow.png";
import userImg from "../assets/images/user-profile.png";
import "../styles/components/navbar.css";

import { useState, useEffect } from "react";
import { useUserId } from "../state/UserIdContext";

export default function Navbar() {
  // clear localStorage and logout user
  const { logout } = useUserId();

  // css properties
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // change navbar background
  useEffect(() => {
    changeBackgroundColor();
    // adding the event to listen to the scroll and call the change
    window.addEventListener("scroll", changeBackgroundColor);
  });

  const toggleHover = () => setIsProfileHovered(!isProfileHovered);

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
          <li
            className={
              isProfileHovered ? "user-options active" : "user-options"
            }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <div class="user-options user-menu">
              <img src={userImg} alt="" className="user-avatar" />
              <img src={userArrow} alt="" className="user-arrow-options" />
              <div class="menu-content">
                <img src={userArrow} alt="" className="menu-arrow" />
                <button className="logout-btn" onClick={logout}>
                  Sign out of Netflix
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
