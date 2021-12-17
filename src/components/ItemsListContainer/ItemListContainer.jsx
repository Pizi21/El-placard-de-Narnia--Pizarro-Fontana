//css
import "./ItemListContainer.css";

//FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//components

import ItemList from "./ItemList/ItemList";
//import getFetch from "../services/getFetch";

import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  /*const { categoryID } = useParams(); */

  console.log(items);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "prendas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      setLoading(false);
    };
    getItems();
  }, []);

  return (
    <>
      <div className="greeting">{greeting}</div>

      {loading ? <h2> Loading </h2> : <ItemList items={items} />}
    </>
  );
}

export default ItemListContainer;
