import React from "react";
import { Card } from "semantic-ui-react";
import "../Item/Item.css"



const Item = ({data}) => (
  <div className="UserCard">
  <Card>
    <Card.Content>
      <Card.Header> {data.username} </Card.Header>
      <Card.Meta>
        <span className="date"> {data.email}</span>
      </Card.Meta>
      <Card.Description>
      {data.id}
      </Card.Description>
    </Card.Content>
    
  </Card>
  </div>
);


export default Item;