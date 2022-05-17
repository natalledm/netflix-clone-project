import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import "./styles/base.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <UserDashboard />
    </div>
  );
}
