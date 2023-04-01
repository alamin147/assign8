import React from "react";
const Cart = (props) => {
  const cart = props.cart;

  return (
    <>
      {cart.map((element) => {
        return <p key={element.id}>{element.blogTitle}</p>
      })}
    </>
  );
};

export default Cart;
