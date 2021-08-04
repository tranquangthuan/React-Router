import React from "react";

class ProductDetail extends React.Component {
  render() {
    var { match } = this.props;
    var { name } = match.params;
    return (
      <div className="container">
        <h1>Chi tiet san pham </h1>

        <div clasName="row">{name}</div>
      </div>
    );
  }
}

export default ProductDetail;
