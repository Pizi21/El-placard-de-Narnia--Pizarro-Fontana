import React, { useEffect, useState } from "react";
import "../ItemsListContainer/ItemList/Item/Item.css";

//FIREBASE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  console.log("ITEM DETAIL", itemDetail);

  let paramsID = useParams();
  console.log("paramsid", paramsID, paramsID.id);

  const itemFiltered = itemDetail.filter((item) => {
    return item.id === paramsID.id;
  });

  console.log("itemfiltered", itemFiltered);

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "prendas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemDetail(docs);
    };
    getItem();
  }, []);

  return (
    <div className="CharacterList-detail">
      {itemFiltered.map((item) => {
        return <ItemDetail item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
