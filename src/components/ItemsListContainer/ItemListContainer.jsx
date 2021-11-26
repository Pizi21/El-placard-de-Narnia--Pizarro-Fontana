/*import UserCard from "../UserCard/UserCard";
import imagenCamisa1 from "../../media/imagenCamisa1.jpeg";
import camisaAzul from "../../media/camisaAzul.jpeg";
import camisaRoja from "../../media/camisaRoja.jpeg"; */
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer= ({greeting}) => {
    return (
        <><div className="greeting">{greeting}</div>
       <ItemCount stock={5} initial={0} />
       {/*<div className="cards">
            <UserCard
                item="Camisa cudrille"
                price="$700"
                size="M"
                img={imagenCamisa1} />
            <UserCard
                item="Camisa azul"
                price="$700"
                size="M"
                img={camisaAzul} />
            <UserCard
                item="Camisa Roja"
                price="$700"
                size="M"
                img={camisaRoja} />
    </div>*/}</> 
    );
};

export default ItemListContainer