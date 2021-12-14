import React from "react";
import { Card, Image } from "semantic-ui-react";
import "../Item/Item.css"
import { Link } from "react-router-dom";


const Item = ({items}) => {
  return(

  <div className="UserCard">
  <Card>
    <Card.Content>
    <Image src={items.img} wrapped ui={false} />
      <Card.Header> {items.name} </Card.Header>
      <Card.Meta>
        $ {items.price}
      </Card.Meta>
      <Card.Description>
      Talle: {items.size}
      </Card.Description>
      <Link to={`/item/${items.id}`}>
        <button> Mas </button>
      </Link>
    </Card.Content>
    
  </Card>
  </div>
)
  };


export default Item;