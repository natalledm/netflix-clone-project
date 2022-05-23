import { Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";

export default function LoggedRoutesUser() {
  return (
    <Routes>
      <Route path="/browse" element={<UserDashboard />} />
    </Routes>
  );
}
