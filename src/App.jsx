
import React, { Component, Fragment } from "react";
import "./styles.css";
//components
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import imagenCamisa1 from "./media/imagenCamisa1.jpeg"
import CamisaAzul from "./media/CamisaAzul.jpeg"
import camisaRoja from "./media/camisaRoja.jpeg"

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <NavBar />
        </div>
        <div className="headerPosition">
          <Header 
            title="El Placard de Narnia"
            subtitle="Tú no tienes un alma. Tú eres el alma. Y tiene un cuerpo"
          />
        </div>
        <div> 
          <ItemListContainer />
        </div>
        <div className="cards">
        <UserCard
          item="Camisa cudrille"
          price="$700"
          size="M"
          img= {imagenCamisa1}
        />
        <UserCard
          item="Camisa azul"
          price="$700"
          size="M"
          img={CamisaAzul}
        />
        <UserCard
          item="Camisa Roja"
          price="$700"
          size="M"
          img={camisaRoja}
        />
        </div>
        <div className="footer"></div>
      </Fragment>
    );
  }
}

export default App;

