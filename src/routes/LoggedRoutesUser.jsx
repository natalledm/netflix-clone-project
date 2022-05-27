import { Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";
import VideoPage from "../pages/VideoPage";

export default function LoggedRoutesUser() {
  return (
    <Routes>
      <Route path="/browse" element={<UserDashboard />} />
      <Route path="/watch/:videoId" element={<VideoPage />} />
    </Routes>
  );
}
