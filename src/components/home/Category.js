import React from "react";
import { connect } from "react-redux";
import {
  filterAksesoris,
  filterALL,
  filterElektronik,
  filterHobi,
  filterPakaian,
  filterPeliharaan,
  filterSepatu,
} from "../actions";

class Category extends React.Component {
  handleClick = (category) => {
    category.forEach((item) => {
      this.props.filterElektronik(item.category);
    });
  };

  filterSemuas = (category) => {
    category.forEach((item) => {
      this.props.filterAll(item.category);
    });
  };

  aksesoris = (category) => {
    category.forEach((item) => {
      this.props.filterAksesoris(item.category);
    });
  };

  peliharaan = (category) => {
    category.forEach((item) => {
      this.props.filterPeliharaan(item.category);
    });
  };

  hobi = (category) => {
    category.forEach((item) => {
      this.props.filterHobi(item.category);
    });
  };

  pakaian = (category) => {
    category.forEach((item) => {
      this.props.filterPakaian(item.category);
    });
  };

  sepatu = (category) => {
    category.forEach((item) => {
      this.props.filterSepatu(item.category);
    });
  };

  render() {
    return (
      <div className="category-container">
        <div className="category-content">
          <div
            onClick={() => this.filterSemuas(this.props.products)}
            value="ALL"
            className="item"
          >
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
          <div
            onClick={() => this.pakaian(this.props.products)}
            className="item"
          >
            <i className="fas fa-tshirt fa-2x" />
            <p>Pakaian</p>
          </div>

          <div
            onClick={() => this.sepatu(this.props.products)}
            className="item"
          >
            <i className="fas fa-socks fa-2x" />
            <p>Sepatu</p>
          </div>
          <div
            onClick={() => this.aksesoris(this.props.products)}
            className="item"
          >
            <i className="fas fa-shopping-bag fa-2x" />
            <p>Tas & Aksesoris</p>
          </div>
          <div onClick={() => this.hobi(this.props.products)} className="item">
            <i className="fas fa-basketball-ball fa-2x" />
            <p>Hobi</p>
          </div>
          <div
            onClick={() => this.peliharaan(this.props.products)}
            className="item"
          >
            <i className="fas fa-cat fa-2x" />
            <p>Peliharaan</p>
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
    filterElektronik: (category) => {
      dispatch(filterElektronik(category));
    },

    filterAll: (category) => {
      dispatch(filterALL(category));
    },

    filterPakaian: (category) => {
      dispatch(filterPakaian(category));
    },
    filterSepatu: (category) => {
      dispatch(filterSepatu(category));
    },

    filterAksesoris: (category) => {
      dispatch(filterAksesoris(category));
    },

    filterHobi: (category) => {
      dispatch(filterHobi(category));
    },

    filterPeliharaan: (category) => {
      dispatch(filterPeliharaan(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
