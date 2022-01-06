import Item from "./Item/Item"

function ItemList  ({ items })  {
  console.log("itemList", items)
  return (
  <>  
    {items.map( item =>  <Item items={item} key={item.id} />) }   
  </>
  );
}

export default ItemList;
