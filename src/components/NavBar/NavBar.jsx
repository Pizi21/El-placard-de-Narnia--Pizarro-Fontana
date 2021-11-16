
import CartWidget from "../cartWidget";
import "./NavBar.css";

const NavBar= () =>{
    return(
        <nav className="container">
            
            <ul>
                <li><a href="https://www.instagram.com/feria_garage_sale/?hl=en">Home</a></li>
                <li><a href="https://www.instagram.com/feria_garage_sale/?hl=en">Productos</a></li>
                <li><a href="https://www.instagram.com/feria_garage_sale/?hl=en">FAQ</a></li>
                <li><a href="https://www.instagram.com/feria_garage_sale/?hl=en">Carrito</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar