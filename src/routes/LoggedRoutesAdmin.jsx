import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";

export default function LoggedRoutesAdmin() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/browse" element={<UserDashboard />} />
    </Routes>
  );
}
