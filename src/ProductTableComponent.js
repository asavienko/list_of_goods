import React from "react"
import SearchBar from "./SearchBar";
import ProductListComponent from "./ProductListComponent";

class ProductTableComponent extends React.Component{

  render() {
    return<div>
      <SearchBar/>
      <ProductListComponent products={this.props.products}/>
    </div>
  }
}

export default ProductTableComponent