import { BrowserRouter } from "react-router-dom";
import { useUserId } from "./state/UserIdContext";
import LoggedRoutesAdmin from "./routes/LoggedRoutesAdmin";
import LoggedRoutesUser from "./routes/LoggedRoutesUser";
import NotLoggedRoutes from "./routes/NotLoggedRoutes";
import "./styles/base.css";

export default function App() {
  const { userId, userInfo } = useUserId();

  const user = userInfo.role === "user";
  const admin = userInfo.role === "admin";

  return (
    <div>
      <BrowserRouter>
        {userId && admin && <LoggedRoutesAdmin />}
        {userId && user && <LoggedRoutesUser />}
        {!userId && <NotLoggedRoutes />}
      </BrowserRouter>
    </div>
  );
}
