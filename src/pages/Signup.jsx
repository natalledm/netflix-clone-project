import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //add useNavigate

import { addDocumentWithId } from "../scripts/fireStoreDB";
import { createUser } from "../scripts/firebaseAuthentication";
import formInfo from "../data/signup-form.json";
import InputField from "../components/InputField";

import "../styles/pages/signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    const uid = await createUser(email, password).catch(onFail);
    const userData = { fullName, email, role: "user", userList: [] };
    const isSuccessful = await addDocumentWithId("users", userData, uid).catch(
      onFail,
    );

    if (isSuccessful) onSuccess();
  }

  function onSuccess() {
    alert(`Account created! You can login now.`);
    navigation("/login");
  }

  function onFail(error) {
    console.log(error);
    alert(error);
  }

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create an Account</h1>
      <form onSubmit={onSubmit} className="signup-form">
        <InputField
          state={[fullName, setFullName]}
          fieldInfo={formInfo.fullName}
        />
        <InputField state={[email, setEmail]} fieldInfo={formInfo.email} />
        <InputField
          state={[password, setPassword]}
          fieldInfo={formInfo.password}
        />
        <button className="main-button">Create account</button>
      </form>
      <p className="login-paragraph">
        Already have an account?{" "}
        <Link to={"/login"} className="link-login">
          Log in
        </Link>
      </p>
    </div>
  );
}
