import React from 'react'
import { Card } from "semantic-ui-react";

const ItemDetail = ({details}) => (
    <div className="UserCard">
    <Card>
      <Card.Content>
        <Card.Header> {details.id} </Card.Header>
        <Card.Meta>
           {details.title}
        </Card.Meta>
        <Card.Description>
        {details.body}
        </Card.Description>
      </Card.Content>
      
    </Card>
    </div>
  );
export default ItemDetail
