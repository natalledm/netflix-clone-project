import { useParams } from "react-router-dom";

export default function EditPage() {
  const { videoId } = useParams();
  return <h1>Hi</h1>;
}
