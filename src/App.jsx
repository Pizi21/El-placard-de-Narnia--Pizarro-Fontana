import React, { Fragment } from "react";
import "./styles.css";
//components
//import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//views
import Home from "./views/Home";
import FAQ from "./views/FAQ";
import Productos from "./views/Productos";
import Cart from "./views/Cart";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="headerPosition">
          <Header />
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        

        <div className="footer"></div>
      </Fragment>
    </Router>
  );
};

export default App;
