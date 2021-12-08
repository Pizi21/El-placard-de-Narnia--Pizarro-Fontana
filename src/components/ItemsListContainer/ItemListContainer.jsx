//css
import "./ItemListContainer.css"

//components

import ItemList from "./ItemList/ItemList";

import React ,{useEffect, useState} from 'react'



const ItemListContainer= ({greeting}) => {
    
    

    const [users, setUsers] = useState([]);
    console.log("State",users)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=> response.json ())
           .then((json)=> setUsers(json))
    }, []);

    return (
        <><div className="greeting">{greeting}</div>
       
       <ItemList  users={users} />
       </> 
    );
};

export default ItemListContainer