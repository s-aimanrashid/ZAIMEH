// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
