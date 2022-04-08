import React, { useEffect } from "react";

const Cart = () => {
  let cartItem = [];

  useEffect(() => {
    cartItem = JSON.parse(localStorage.getItem("productId"));
    console.log(cartItem);
    console.log(cartItem.length);
  }, []);
  return (
    <div>
      {/* <p>
        {cartItem.map((item) => {
          return item;
        })}
      </p> */}
    </div>
  );
};

export default Cart;
