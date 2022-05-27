import { useParams } from "react-router-dom";
import YoutubeVideo from "../components/YoutubeVideo";

export default function VideoPage() {
  const { videoId } = useParams();

  return (
    <div>
      <YoutubeVideo videoId={videoId} />
    </div>
  );
}
