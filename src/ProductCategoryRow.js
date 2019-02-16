import React from "react"

class ProductCategoryRow extends React.Component {


  render() {
    const {category, key} = this.props;
    return <tr>
      <th colSpan="2" key={key}>
        {category}
      </th>
    </tr>

  }
}

export default ProductCategoryRow