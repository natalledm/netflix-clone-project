import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import RecoverPassword from "./pages/RecoverPassword";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import "./styles/base.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/browse" element={<UserDashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
