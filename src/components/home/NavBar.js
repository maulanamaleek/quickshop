import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./icon.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/quickshop">
            <h1>Quickshop</h1>
          </Link>
          <Link to="/quickshop">
            <img className="logo-small" src={Logo} alt="logo" />
          </Link>
          <form>
            <input type="text" placeholder="Temukan apapun yang kamu mau" />
            <button type="submit">Cari</button>
          </form>
          <div className="info">
            <div className="cart">
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-2x" />
                <div className="cart-count">
                  <p>{this.props.cart}</p>
                </div>
              </Link>
            </div>
            <i className="fas fa-user fa-2x" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.carts,
  };
}

export default connect(mapStateToProps)(NavBar);
