import React from "react"
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductListComponent extends React.Component {


  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(({category, name, price, stocked}) => {
      if (category !== lastCategory) {
        rows.push(<ProductCategoryRow
          category={category}
          key={category}

        />);

        lastCategory = category;
      }
      rows.push(<ProductRow
        name={name}
        price={price}
        stocked={stocked}
      />);
    });

    return <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>

  }
}

export default ProductListComponent