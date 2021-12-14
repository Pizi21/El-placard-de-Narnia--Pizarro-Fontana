import CartWidget from "../cartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";
import {useCartContext} from "../../CartContext/CartContext"

const NavBar = () => {

const {quantityItem} = useCartContext() 

  
  return (
    <nav className="container">
      <ul className="containerUl">
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/category/ropa">
          Prendas
        </Link>
        <Link activeClassName="active" to="/category/accesorios">
          Accesorios
        </Link>
        <Link activeClassName="active" to="/cart">
         {quantityItem() !== 0 && quantityItem ()} 
          <CartWidget /> 
        </Link>
      </ul>
      
    </nav>
  );
};

export default NavBar;
