import "./NavBar.css";
import { Link } from "react-router-dom";
import CardWiget from "../NavBar/CardWiget";

function NavBar() {
  return (
    <nav className="container__nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/category/SmartPhones">SmartPhones</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/LapTops">LapTops</Link>
        </li>
        <li className="nav__li">
          <Link to="/category/Skincare">Skin Care</Link>
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
