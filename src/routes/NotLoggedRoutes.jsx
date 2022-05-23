import { Routes, Route } from "react-router-dom";
import RecoverPassword from "../pages/RecoverPassword";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function NotLoggedRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
