import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Products extends React.Component {
  displayItems() {
    return this.props.product.map((item) => {
      return (
        <div key={item.id} className="product-grid-items">
          <img
            className="product-images"
            src={item.image}
            alt={item.name}
          ></img>
          <h5>{item.name}</h5>
          <p>{`Rp. ${item.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
          <Link
            to={`/${item.name
              .split(" ")
              .map((i, r) => {
                const text = item.name.split(" ");

                if (r === 0) {
                  return "beli/" + i + "-";
                } else if (r !== 0 && r !== text.length - 1) {
                  return i + "-";
                } else return i;
              })
              .join("")
              .toLowerCase()}`}
          >
            <button>Beli Sekarang</button>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="products-container">
        <div className="products-content">
          <h1>Produk</h1>
          <div className="products-grid">{this.displayItems()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products,
    cart: state.cart,
    id: state.selectedID,
  };
};

export default connect(mapStateToProps)(Products);
