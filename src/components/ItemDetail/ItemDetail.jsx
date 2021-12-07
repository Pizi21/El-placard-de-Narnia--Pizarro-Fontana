import React from 'react'
import { Card } from "semantic-ui-react";


const ItemDetail = ({data}) => (

    <div className="UserCard">
      {console.log(data)}
      
    <Card>
      <Card.Content>
        <Card.Header> {data.id} </Card.Header>
        <Card.Meta>
           {data.name}
        </Card.Meta>
        <Card.Description>
        {data.adress}
        </Card.Description>
      </Card.Content>
      
    </Card>
    </div>
  );
export default ItemDetail
