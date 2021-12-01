import React, {useState } from "react";
import "./itemCount.css";
//import { Card, Image } from 'semantic-ui-react'

//const stock= 10;

const ItemCount = ({stock, initial, onAdd}) => {

    

    const [counter, setCounter] = useState(initial);

    const handlerCounterUp =()=>{
        if ( counter < stock ){
      setCounter(counter + 1);
    };
};

const handlerCounterDown =()=>{
    if ( counter !==0){
  setCounter(counter - 1);
}

};


    return (
        
        <div>
           <p> </p>
          <div div className="ui card">
          <div className="image">
          <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt=""/>
          </div>
          <div div className="content">
          <div className="header">Producto</div>
          <div className="meta"> Categoria</div>
          <div className="description">Descripcion del producto</div>
          </div>
          <div div className="extra content"></div>
           <div className=" ui three buttons">
             <div className="ui basic red button" onClick={handlerCounterUp}>+</div>
             <div className="ui basic button"> {counter}</div>
             <div className=" ui basic green button" onClick={handlerCounterDown}>-</div>
             {
               counter >0 ?
               <div className="ui bottom attached button" onClick={()=>onAdd(counter)}>
                 <i className="cart icon"></i>
                 Añadir al carrito
                 </div>
                 :
                 <div className="ui bottom attached button disabled">
                   <i className="cart icon"></i>
                   Añadir al Carrito
                 </div>
             }


           </div>

          </div>
          



         
        </div>
        
    )
}

export default ItemCount
