import UserCard from "../UserCard/UserCard";
import imagenCamisa1 from "../../media/imagenCamisa1.jpeg";
import camisaAzul from "../../media/camisaAzul.jpeg";
import camisaRoja from "../../media/camisaRoja.jpeg";


const ItemListContainer= ({greeting}) => {
    return (
        <><div>{greeting}</div>
        <div className="cards">
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
        </div></>
       
    );
};

export default ItemListContainer