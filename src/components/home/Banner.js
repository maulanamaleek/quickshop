import React from "react";
import BannerSM from "../img/bannersm.png";
import SideOne from "../img/sideone.png";
import SideTwo from "../img/sidetwo.png";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="main-banner">
          <img src={BannerSM} alt="banner" className="banner-small" />
        </div>
        <div className="side-banner">
          <div className="side-item">
            <img src={SideOne} alt="banner" className="side-one" />
          </div>
          <div className="side-item">
            <img src={SideTwo} alt="banner" className="side-one" />
          </div>
        </div>
      </div>
    </div>
  );
}
