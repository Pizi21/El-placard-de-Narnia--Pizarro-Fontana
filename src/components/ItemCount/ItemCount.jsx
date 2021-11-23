import React, {useState } from "react";
import "./itemCount.css";

const stock= 10;

const ItemCount = () => {

    

    const [counter, setCounter] = useState(0);

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
