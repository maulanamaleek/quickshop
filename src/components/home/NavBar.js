import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchFilter } from "../actions";
import Logo from "./icon.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onChange = (e) => {
    const text = e.target.value.toLowerCase();
    this.setState({ search: text });
  };

  handleSearch = (value) => {
    this.props.search(value);
  };

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
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onChange}
              placeholder="Temukan apapun yang kamu mau"
            />
            <button
              onClick={() => this.handleSearch(this.state.search)}
              type="submit"
            >
              Cari
            </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    search: (value) => {
      dispatch(searchFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
