import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../ItemsListContainer/ItemList/Item/Item.css";

import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer=()=> {
  let id = useParams();

  let userID = id.id;

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${userID}`).then((res) =>
      setUser(res.data)
    );
  }, [userID]);

  return (
    <div className='CharacterList-detail'>
      {console.log("hola")}
    
        <ItemDetail data={user}/>
    
      
    </div>
  );
}

export default ItemDetailContainer;
