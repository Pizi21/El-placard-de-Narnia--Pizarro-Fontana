import React, {useState } from "react";
import "./itemCount.css";

//const stock= 10;

const ItemCount = ({stock, initial}) => {

    

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
           <p> {counter}</p>

        <button onClick={handlerCounterUp}>Incrementar</button>
        <button onClick={handlerCounterDown}>Decrementar</button>  
        </div>
        
    )
}

export default ItemCount
