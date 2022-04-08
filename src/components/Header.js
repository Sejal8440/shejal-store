import React from "react";
import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-component">
        <button>
          Cart <span className="cart-item-count"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
