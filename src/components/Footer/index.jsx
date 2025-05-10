import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer-container">
      <ul className="social-list-ul">
        <li>
          <a
            className="link-a"
            href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="link-a"
            href="https://github.com/YudiYamada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
