import React from "react";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";

class Category extends React.Component {
  handleClick = (type) => {
    this.props.VisibilityFilters(type);
  };

  render() {
    return (
      <div className="category-container">
        <div className="category-content">
          <div className="item">
            <i className="fas fa-bolt fa-2x" />
            <p>Semua</p>
          </div>
          <div
            onClick={() => this.handleClick(this.props.products)}
            className="item"
          >
            <i className="fas fa-bolt fa-2x" />
            <p>Elektronik</p>
          </div>
          <div className="item">
            <i className="fas fa-tshirt fa-2x" />
            <p>Pakaian</p>
          </div>

          <div className="item">
            <i className="fas fa-socks fa-2x" />
            <p>Sepatu</p>
          </div>

          <div className="item">
            <i className="fas fa-basketball-ball fa-2x" />
            <p>Hobi</p>
          </div>
          <div className="item">
            <i className="fas fa-cat fa-2x" />
            <p>Peliharaan</p>
          </div>
          <div className="item">
            <i className="fas fa-shopping-bag fa-2x" />
            <p>Aksesoris</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    VisibilityFilters: (item) => {
      dispatch(VisibilityFilters(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
