
import React, { Component, Fragment } from "react";
import "./styles.css";
//components
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


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
        <ItemListContainer greeting={'Hola Maria Florencia'}/>
        <div className="footer"></div>
      </Fragment>
    );
  }
}

export default App;

