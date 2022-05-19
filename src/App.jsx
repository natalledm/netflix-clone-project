import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
