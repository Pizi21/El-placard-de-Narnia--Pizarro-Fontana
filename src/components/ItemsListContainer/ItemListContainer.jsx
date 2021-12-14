//css
import "./ItemListContainer.css"


//components

import ItemList from "./ItemList/ItemList";
import getFetch from "../services/getFetch";

import React ,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";



function ItemListContainer ({greeting}) {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState (true)

    const {categoryID}= useParams ()


    useEffect(()=> {
        if (categoryID){
            getFetch
            .then(res =>{
                setItems (res.filter(prod => prod.category))
            })

            .catch((err) => console.log (err))
            .finally (() => setLoading (false))

        } else{
            getFetch
            .then ( res => {
                setItems(res)
            })
            .catch((err) => console.log (err))
            .finally (() => setLoading (false))
        }
    }, [categoryID]);

    return (
        <><div className="greeting">{greeting}</div>

        { loading ? <h2> Loading </h2> : <ItemList  items={items} /> }
       
       
       </> 
    );
};

export default ItemListContainer