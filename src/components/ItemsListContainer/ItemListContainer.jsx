//css
import "./ItemListContainer.css"

//components
//import ItemCount from "../ItemCount/ItemCount" 
import ItemList from "./ItemList/ItemList";

import React ,{useEffect, useState} from 'react'



const ItemListContainer= ({greeting}) => {
    
    {/*const addToCart = (counter) =>{
        let prod;
        counter > 1 ? prod = 'productos' : prod= 'producto';
        alert (`ingresaste ${counter} ${prod} al carrito`)
    } */}

    const [users, setUsers] = useState([]);
    console.log("State",users)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=> response.json ())
           .then((json)=> setUsers(json))
    }, []);

    return (
        <><div className="greeting">{greeting}</div>
       {/*<ItemCount stock={5} initial={0} anAdd={addToCart}/> */}
       <ItemList  users={users} />
       </> 
    );
};

export default ItemListContainer