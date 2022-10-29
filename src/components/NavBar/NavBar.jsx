import "./NavBar.css";

import CardWiget from "../CardWiget/CardWiget";

function NavBar () {
    return  <nav className="container__nav">
                <ul className="nav__ul">
                 
                    <li className="nav__li">
                        <a href="#">Categoria 1</a>
                    </li>
                    <li className="nav__li">
                        <a href="#">Categoria 2</a>
                    </li>
                    <li className="nav__li">
                        <CardWiget />
                    </li>
                    
                </ul>
            </nav>
}

export default NavBar;