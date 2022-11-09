import React from "react";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="App__header">
      <div className="container__logo">
        <img src="img/logoNvidiaAmd.jpg" className="logo" alt="logo" />
        <h2>Video Cards Store</h2>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
