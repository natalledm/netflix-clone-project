import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserId } from "../state/UserIdContext";
import { loginUser } from "../scripts/firebaseAuthentication";

import "../styles/pages/login.css";
import loginBg from "../assets/images/login-netflix.png";
import logo from "../assets/logo.svg";

export default function Login() {
  // global state
  const { login } = useUserId();

  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    const uid = await loginUser(email, password).catch(onFail);

    if (uid) onSuccess(uid);

    resetForm();
  }

  function onFail(error) {
    console.error(error);
    alert(`Error: Wrong password or email! Error message: ${error}`);
  }

  function onSuccess(uid) {
    login(uid);
    navigation("/browse");
  }

  function resetForm() {
    setEmail("");
    setPassword("");
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
