import GetTitles from "../components/GetTitles";
import CreateTitle from "./CreateTitle";

export default function AdminDashboard() {
  return (
    <div>
      <GetTitles />
      <CreateTitle />
    </div>
  );
}
