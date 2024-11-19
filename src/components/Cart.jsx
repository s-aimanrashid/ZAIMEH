import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
