import React from "react";
import "./Header.css";
import placardRosa from "../../media/placardRosa.jpg"

const Header = ({title}) => {
  
  return (
    <div className="Header">
      <h1> {title} </h1> 
      <div className="divImagen">
      <img  src={placardRosa} alt= "placard rosa" ></img>
      </div>
    </div>
  );
};

Header.defaultProps ={
  title: "El Placard de Narnia"
        
}
export default Header;
