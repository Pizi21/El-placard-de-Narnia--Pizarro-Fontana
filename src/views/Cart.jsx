import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";

//CSS
import "./Cart.css";

const Cart = () => {
  const { cartList, emptyCart, deleteFromCart, totalPrice } = useCartContext();
  console.log("cart list", cartList);

  return (
    <>
      {cartList.length === 0 && <h2> Tu Carrito esta vacio TT-TT </h2>}
      {cartList.length > 0 && (
        <div className="detalleCarrito">
          {" "}
          {cartList.map((obj) => (
            <div key={obj.item.id}>
              <img
                style={{ width: "100px" }}
                src={obj.item.img}
                alt={obj.item.name}
              />

              <div className="descripcionCarrito">
                <p> {obj.item.type}</p>
                <p> Unidad: {obj.quantity} </p>
                <p> Precio: ${obj.item.price * obj.quantity}</p>{" "}
                <Button
                  onClick={() => deleteFromCart(obj.item.id, obj.quantity)}
                >
                  {" "}
                  Eliminar{" "}
                </Button>{" "}
              </div>
            </div>
          ))}
          <div className="vaciarCarrito">
            <Link to="/">
              {" "}
              <Button onClick={emptyCart}> Vaciar Carrito</Button>{" "}
            </Link>{" "}
          </div>
          <div className="precioTotal">
            {" "}
            <p> Precio Total: ${totalPrice()}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
