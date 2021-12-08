import CartWidget from "../cartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <ul className="containerUl">
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/FAQ">
          FAQ
        </Link>
        <Link activeClassName="active" to="/Productos">
          Productos
        </Link>
        <Link activeClassName="active" to="/cart">
          Carrito
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
