
import Item from "./Item/Item"



const ItemList = ({users}) => {

  

    return (
        <div>
            <h1> Item List</h1>
            
            {users.map((user)=> {

            return(

            <Item data={user} key={user.id} />)
            
            })}

            
            
        </div>
    )
}


export default ItemList


