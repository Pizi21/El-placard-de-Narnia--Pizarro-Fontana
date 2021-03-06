import React , {createContext, useState, useContext} from "react";

 export const CartContext= createContext ()
 export const useCartContext =() => useContext (CartContext)



  export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
    const [quantItems, setQuantItems] = useState (0);

    function addToCart (item, quantity){
        if (cartList.length !== 0) {
            const index = cartList.findIndex ( obj => {return obj.item.id === item.id})
            if (index  !== -1){
                const newCart = cartList;
                newCart[index].quantity= newCart[index].quantity + quantity 
                setCartList (newCart);
            }
            else setCartList([...cartList, {item, quantity: quantity}])
        }
        else setCartList ([{item, quantity: quantity}])

        setQuantItems(quantItems + quantity);
    }
console.log ("context", cartList)

    function deleteFromCart (itemID, quantity){
        setCartList(cartList.filter(obj => obj.item.id !== itemID));
        setQuantItems( quantItems - quantity);
    }
    

    const quantityItem = ()=>{
        return cartList.reduce((acum,item)=> acum + item.quantity, 0)
        
    };
    

    const totalPrice= ()=>{
        return cartList.reduce((acum ,value) =>(acum + (value.quantity  * value.item.price  )),0 )
    };


    const emptyCart=()=>{
        setCartList([]);
        setQuantItems(0);
    }

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<CartContext.Provider value={{cartList, quantItems,addToCart,
            deleteFromCart,
            quantityItem,
            totalPrice,
            emptyCart}}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};