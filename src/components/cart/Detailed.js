import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem, addQuantity, subQuantity, clearCart } from "../actions";

class Detailed extends React.Component {
  handleClick = (id) => {
    this.props.addItem(id);
    console.log(this.props.items);
  };

  handleAdd = (id) => {
    this.props.addQuantity(id);
  };
  handleSub = (id) => {
    this.props.subQuantity(id);
  };

  handleClear = () => {
    this.props.clearCart();
  };

  render() {
    return (
      <div className="detail-container">
        <div className="detail-image">
          <Link to="/quickshop">
            <p className="back">← Kembali</p>
          </Link>
          <img src={this.props.image} alt="quickshop" />
        </div>
        <div className="detail-text">
          <h1>{this.props.name}</h1>
          <p>{this.props.detail}</p>
          <div className="quantity">
            <button onClick={() => this.handleSub(this.props.id)}>-</button>
            <span className="quantity-text"> {this.props.quantity}</span>
            <button onClick={() => this.handleAdd(this.props.id)}>+</button>
          </div>
          <h5>{this.props.price}</h5>
          <div className="detail-btn">
            <Link to="/cart">
              <button
                onClick={() => {
                  this.handleClick(this.props.id);
                }}
                className="btn-keranjang"
              >
                Masukkan Keranjang
              </button>
            </Link>
            <Link to="/complete">
              <button onClick={() => this.handleClear()} className="btn-beli">
                Bayar
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.total,
    carts: state.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subQuantity: (id) => {
      dispatch(subQuantity(id));
    },

    clearCart: () => {
      dispatch(clearCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailed);
