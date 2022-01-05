import React from "react";
import "./Header.css";
import placardRosa from "../../media/placardRosa.jpg";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <h1> {title} </h1>
      <div className="divImagen">
        <Link activeClassName="active" to="/">
          <img src={placardRosa} alt="placard rosa"></img>
        </Link>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "El Placard de Narnia",
};
export default Header;
