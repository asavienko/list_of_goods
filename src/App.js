import React, { Component } from 'react';
import './App.css';
import ProductTableComponent from "./ProductTableComponent";
import {PRODUCTS} from "./enum";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductTableComponent products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
