import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pages/login.css";
import loginBg from "../assets/images/login-netflix.png";
import logo from "../assets/logo.svg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    console.log("signed in");
  }

  return (
    <div className="login-page">
      <div className="image-bg-container">
        <img src={loginBg} alt="" />
      </div>
      <img src={logo} alt="" id="netflix-logo-login" />
      <div className="login-content">
        <div className="login-container">
          <h1 className="login-title">Sign In</h1>
          <form onSubmit={onSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="login-button">Sign In</button>
          </form>
          <p className="recover-help">
            <Link to={"/recover-password"} className="link-footer">
              Need help?
            </Link>
          </p>
          <p className="signup-paragraph">
            New to Netflix?{" "}
            <Link to={"/signup"} className="link-footer">
              Sign up now
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
