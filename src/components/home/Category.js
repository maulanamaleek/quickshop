import React from "react";

export default function Category() {
  return (
    <div className="category-container">
      <div className="category-content">
        <div className="item">
          <i className="fas fa-bolt fa-2x" />
          <p>Elektronik</p>
        </div>
        <div className="item">
          <i className="fas fa-tshirt fa-2x" />
          <p>Baju</p>
        </div>
        <div className="item">
          <i className="fas fa-bolt fa-2x" />
          <p>Celana</p>
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
