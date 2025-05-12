import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/newpost`} className="new-btn">
            Novo Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
