import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../CartContext/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
  const [changeButton, setChangeButton] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(item, quantity);
    setChangeButton(true);
    Swal.fire({
      title: `You added : ${quantity}`,
      icon: `success`,
    });
  };

  console.log("ITEMDETAIL", item);
  return (
    <div className="UserCard">
      <Card>
        <Card.Content>
          <Image src={`${item.img}`} wrapped ui={false} />
          <Card.Header> {`${item.type}`} </Card.Header>
          <Card.Meta>$ {`${item.price}`} </Card.Meta>
          <Card.Description>
            Talle: {`${item.size}`} / {`${item.color}`}
          </Card.Description>
          <div>
            {!changeButton && (
              <ItemCount
                stock={5}
                initial={0}
                onAdd={onAdd}
                changeButton={changeButton}
              />
            )}

            {changeButton && (
              <div>
                <Link to="/">
                  <button className="ui button"> Continuar Compra </button>
                </Link>

                <Link to="/cart">
                  <button className="ui button"> Finalizar Compra </button>
                </Link>
              </div>
            )}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default ItemDetail;
