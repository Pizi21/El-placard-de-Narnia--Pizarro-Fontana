import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {

  const [counterValue, setCounterValue] = useState();

  const addToCart = (counter) => {
    setCounterValue(counter);

    /*let prod;
        counter > 1 ? prod = 'productos' : prod= 'producto';
        alert (`ingresaste ${counter} ${prod} al carrito`) */
  };
  let navigate = useNavigate();

  return (
    <div className="UserCard">
      {console.log(data)}

      <Card>
        <Card.Content>
          <Card.Header> {data.id} </Card.Header>
          <Card.Meta>{data.name}</Card.Meta>
          <Card.Description>{data.adress}</Card.Description>
        </Card.Content>
      </Card>
      <ItemCount stock={5} initial={0} onAdd={addToCart} />
      <button onClick={()=> navigate(`/cart`)} class="ui button"> Finalizar Compra </button>
    </div>
  );
};
export default ItemDetail;
