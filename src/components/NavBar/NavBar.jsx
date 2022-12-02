import "./NavBar.css";
import { Link } from "react-router-dom";
import CardWiget from "../NavBar/CardWiget";

function NavBar() {
  return (
    <nav className="container__nav">
      <ul className="nav__ul">
        <li className="nav__li">
        <li className="nav__li">
          <Link to="/category/tv">Smart tv</Link>
        </li>
          <Link to="/category/smartphones">SmartPhones</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/laptops">LapTops</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/videogames">Video Games</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/Nvidia">Nvidia</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/AMD-Radeon">AMD-Radeon</Link>
        </li>
        <li className="nav__li">
          <Link to="#">
            <CardWiget />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
