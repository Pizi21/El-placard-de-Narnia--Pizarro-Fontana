import React, { useEffect, useState } from 'react';
import "../ItemsListContainer/ItemList/Item/Item.css";


import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

 const items = [
  { id: 1, name: "Camisa Roja", category: "ropa", price: 700, size: "M", img: "../../media/camisaRoja.jpeg" , stock: 1},
  { id: 2, name: "Camisa Verde", category: "ropa", price: 600, size: "M", img: "../../media/aaa.jpeg", stock: 1 },
  { id: 3, name: "Camisa Azul", category: "ropa", price: 500, size: "M", img:"../../media/camisaAzul.jpeg",stock: 1 },
  { id: 4, name: "Camisa Cuadrille", category: "ropa", price: 700, size: "M", img: "../../media/imagenCamisa1.jpeg",stock: 1 },
];

const ItemDetailContainer=()=> {
  const {id} = useParams();
  const [itemDetail, setItemDetail]= useState({});

  let getItem = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      items ? resolve(items) : reject ("error 404")
      console.log("soy un item", resolve);
    },2000)
  });

  useEffect(() => {
    id ? getItem.then( res => {setItemDetail( res.find (a => a.id === parseInt(id)))})
    .catch( err => console.log(err))
    : getItem.then( res=> {setItemDetail(res)})
     .catch( err => console.log(err))
  })

  return (
    <div className='CharacterList-detail'>
      {console.log("hola")}
    
        <ItemDetail item={itemDetail}/>
    
      
    </div>
  );
}

export default ItemDetailContainer;
