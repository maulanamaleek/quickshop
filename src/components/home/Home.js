import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Footer from "./Footer";

import React from "react";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}
