import React from "react";
import { NavLink } from "react-router-dom";

class Product extends React.Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "Iphone",
        price: 5,
      },
      {
        id: 2,
        slug: "samsung",
        name: "Samsung",
        price: 25,
      },
      {
        id: 3,
        slug: "ipad",
        name: "Ipad",
        price: 15,
      },
    ];
    var { match } = this.props;
    var url = match.url;
    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li>
            {index + 1} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    return (
      <div className="container">
        <div className="row text-center">{result}</div>
        {/* <div className="row">
          <Route path="/product/:name" component={ProductDetail} />
        </div> */}
      </div>
    );
  }
}

export default Product;
