import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import EditPage from "../pages/EditPage";
import UserDashboard from "../pages/UserDashboard";
import VideoPage from "../pages/VideoPage";

export default function LoggedRoutesAdmin() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<AdminDashboard />} />
      <Route path="/admin/edit/:videoId" element={<EditPage />} />
      <Route path="/browse" element={<UserDashboard />} />
      <Route path="/watch/:videoId" element={<VideoPage />} />
    </Routes>
  );
}
