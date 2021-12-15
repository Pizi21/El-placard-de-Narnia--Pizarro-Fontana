import React, { Fragment } from "react";
import "./styles.css";
//components
//import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./CartContext/CartContext";

//views
import Home from "./views/Home";
import Ropa from "./views/Ropa";
//import Productos from "./views/Productos";
import Cart from "./views/Cart";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";


//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
   <CartContextProvider>
    <Router>
      <Fragment>
        <div className="headerPosition">
          <Header />
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ropa" element={<Ropa />} />
          <Route path="/category/:categoryID" element={<ItemListContainer greeting={"Bienvenido Usuario"} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        

        <div className="footer"></div>
      </Fragment>
    </Router>
    </CartContextProvider>
  );
};

export default App;
