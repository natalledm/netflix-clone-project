import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";

import "../styles/components/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-media-container">
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={youtube} alt="youtube icon" />
      </div>
      <ul className="footer-links">
        <div className="footer-table-column">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Audio and Subtitles
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Media Centre
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
          </li>
        </div>

        <div className="footer-table-column">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Audio Description
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Legal Notices
            </a>
          </li>
        </div>

        <div className="footer-table-column">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Help Centre
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Jobs
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Cookie Preferences
            </a>
          </li>
        </div>
      </ul>
      <div className="copyright">
        <small>
          © 1997-2022{" "}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            Nättflix
          </a>
          , Inc.
        </small>
      </div>
    </footer>
  );
}
