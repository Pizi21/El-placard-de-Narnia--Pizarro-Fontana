
import { useCartContext} from "../CartContext/CartContext";
import { Link } from 'react-router-dom';

import { Button } from 'semantic-ui-react';


const Cart = () => {
    

    const {cartList, emptyCart, deleteFromCart, totalPrice}= useCartContext();
    console.log("cart list", cartList)

  
    return (
        <>
        { cartList.length === 0 &&  <p> Carrito vacio </p>}
        { cartList.length > 0 &&
        <div> {cartList.map(obj=> (
            < div key={obj.item.id} >
        <div>< img src={obj.item.img} alt={obj.item.name}/></div>
        <p> {obj.item.name}</p>
        <p> * {obj.quantity} </p>
        <p> {obj.item.price * obj.quantity}</p>
        
        <div> <Button onClick={()=> deleteFromCart (obj.item.id, obj.quantity)}> Eliminar </Button> </div>
    </div>
    ))}

    <div><Link to="/"> <Button onClick={emptyCart}> Vaciar Carrito</Button> </Link> </div>
    <div> <p> Precio Total: ${totalPrice()}</p></div>
</div>
       }
       </> )
    
};

export default Cart
