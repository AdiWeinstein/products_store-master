import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Cart from './Cart.js';
import Categories from './Categories.js';
import Catalog from './Catalog.js';
import Header from "./Header";
import GetProduct from './GetProduct';

import CatalogProvider from './CatalogContext';
import CartProvider from './CartContext';

function App() {

  return (
    <div className="App">
    <div className="Header">
  <Router>
     <CatalogProvider>
      <CartProvider>
        <Header/>
        <Switch>
          <Route path="/products" exact>
            <Categories />
            <Catalog />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/products/:id">
            <GetProduct />
          </Route>
       </Switch>
      </CartProvider>
      </CatalogProvider>
  </Router>
  </div>
  </div>
  );
}

export default App;
