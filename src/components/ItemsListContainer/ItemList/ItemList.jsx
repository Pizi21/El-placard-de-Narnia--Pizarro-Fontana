import React ,{useEffect, useState} from 'react'
import Item from "./Item/Item"


const ItemList = () => {

    const [users, setUsers] = useState([]);
    console.log("State",users)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=> response.json ())
           .then((json)=> setUsers(json))
    }, []);

    return (
        <div>
            <h1> Item List</h1>
            {users.map((user)=>{
                return <Item data={user} key={user.id} />;
            })}
        </div>
    )
}

export default ItemList


