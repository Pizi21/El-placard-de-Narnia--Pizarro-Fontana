import ItemDetail from "../../ItemDetail/ItemDetail";


import { Link } from "react-router-dom";

const ItemList = ({ users }) => {
  return (
    <div>
      <h1> Productos</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
        
            <Link to={`/detail/${user.id}`}>
              <ItemDetail data={user} />
            </Link>

            {/*<Item data={user} key={user.id} />*/ }
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
