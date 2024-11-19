import React, { useState } from "react";
import "../styles/CheckoutForm.css";
import blacktee from "../assets/blacktee.jpg";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [itemsCount, setItemsCount] = useState(1); 
  const [subtotal] = useState(2499); 
  const deliveryCharge = 150;
  const total = subtotal + deliveryCharge;

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form>
        <h3>Contact Information</h3>
        <label>
          Email:
          <input type="email" required />
        </label>

        <h3>Delivery Address</h3>
        <label>
          First Name (optional):
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <label>
          City:
          <input type="text" required />
        </label>
        <label>
          Postal Code (optional):
          <input type="text" />
        </label>
        <label>
          Phone:
          <input type="tel" required />
        </label>

        <h3>Payment Method</h3>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="cashOnDelivery"
              checked={paymentMethod === "cashOnDelivery"}
              onChange={() => setPaymentMethod("cashOnDelivery")}
            />
            Cash on Delivery
          </label>
        </div>

        <label className="checkbox-label">
          <input type="checkbox" />
          Save this information for next time
        </label>

        <h3>Order Summary</h3>
        <div className="order-summary">
          <div className="order-item">
            <img src={blacktee} alt="Product" />
            <div>
              <p>ZAIMEH T-Shirt</p>
              <p>Quantity: {itemsCount}</p>
              <p>Price: Rs {subtotal}</p>
            </div>
          </div>
          <div className="cost-summary">
            <p>Subtotal: Rs {subtotal}</p>
            <p>Shipping: Rs {deliveryCharge}</p>
            <p>Total: Rs {total}</p>
          </div>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
