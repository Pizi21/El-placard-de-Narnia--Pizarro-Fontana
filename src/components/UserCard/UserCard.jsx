import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./UserCard.css";

const UserCard = ({img, item, price,size}) => (
  <div className="UserCard">
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header> {item} </Card.Header>
      <Card.Meta>
        <span className="date"> {price}</span>
      </Card.Meta>
      <Card.Description>
      {size}
      </Card.Description>
    </Card.Content>
    
  </Card>
  </div>
);


export default UserCard;
