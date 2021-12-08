import Item from "./Item/Item"


import { Link } from "react-router-dom";

const ItemList = ({ users }) => {
  return (
    <div>
      <h1> Productos</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
        
            <Link to={`/detail/${user.id}`}>
              <Item data={user} key={user.id} />
            </Link>

            
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
