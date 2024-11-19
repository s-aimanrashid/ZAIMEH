// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.jpg";
import { FaSearch } from "react-icons/fa"; // Importing search icon

function Header({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Search filter handler
  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredProducts); // Pass the filtered products to the parent (App.jsx)
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Zaimeh Logo" className="logo-image" />
        <div className="logo">ZAIMEH</div>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" /> {/* Magnifying glass icon */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
