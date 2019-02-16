import React from "react"

class ProductRow extends React.Component {


  render() {
    const {name, price, stocked} = this.props;
    let color = {color: "black"};
    if (stocked){
      color = {color: "red"}
    }
      return <tr style={color}>
        <th>
          {name}
        </th>
        <th>
          {price}
        </th>
      </tr>

  }
}

export default ProductRow