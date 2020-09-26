import React, { Component } from "react";
import { connect } from "react-redux";
import Detailed from "./Detailed";
import uuid from "uuid/dist/v1";

class Detail extends Component {
  diplay() {
    return this.props.product.map((item) => {
      return <Detailed src={item.name} />;
    });
  }

  abc() {
    return this.props.product
      .filter(
        (item) =>
          item.name.toLowerCase().split(" ").join("") ===
          window.location.pathname.split("/")[2].split("-").join("")
      )
      .map((a) => {
        return (
          <div key={a.id}>
            <Detailed
              id={a.id}
              detail={a.detail}
              image={a.image}
              name={a.name}
              quantity={a.quantity}
              price={`Rp. ${a.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            />
          </div>
        );
      });
  }

  render() {
    return <div key={() => uuid()}>{this.abc()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};

export default connect(mapStateToProps)(Detail);
