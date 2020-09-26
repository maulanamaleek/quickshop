import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  displayCart() {
    console.log(this.props.added);
    return this.props.added.map((item) => {
      return (
        <div className="cart-grid">
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{`Rp. ${item.total
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-content">
          <Link to="/quickshop">
            <p className="back">← Kembali</p>
          </Link>
          <h1>Keranjang</h1>
          <div className="cart-grid-container">
            <div className="cart-head">
              <h2>Barang</h2>
              <h2>Jumlah</h2>
              <h2>Harga</h2>
            </div>
            <hr></hr>
            {this.displayCart()}
          </div>
          <div className="cart-total">
            <h3>Total</h3>
            <p className="total-value">
              {`Rp. ${this.props.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            </p>
          </div>
          <Link to="/complete">
            <button className="bayar-cart">Bayar</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    added: state.added,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Cart);
