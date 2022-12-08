import React from "react";
import NavBar from "../Header/NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App__header">
      <div className="container__logo">
        <Link to="/">
          <img src="img/logotechstore.jpg" className="logo" alt="logo" />
        </Link>
        <Link to="/">
          <h2>Tech Store</h2>
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
