import "./NavBar.css";

import CardWiget from "../NavBar/CardWiget";

function NavBar() {
  return (
    <nav className="container__nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <link to="/category(
          /smartphones">SmartPhones</link>
        </li>
        <li className="nav__li">
          <link to="/category/laptops">LapTops</link>
        </li>
        <li className="nav__li">
          <link to="/category/skincare">Skin CAre</link>
        </li>
        <li className="nav__li">
          <link to="#">
            <CardWiget />
          </link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
