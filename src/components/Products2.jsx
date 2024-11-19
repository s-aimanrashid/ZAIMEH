import React from "react";
import { Link } from "react-router-dom";
import blacktee from "../assets/blacktee.jpg";
import whitetee from "../assets/whitetee.jpg";
import "../styles/ProductList2.css";

const Products2 = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image === "blacktee.jpg" ? blacktee : whitetee}
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${(product.price / 100).toFixed(2)}</p>
        <div className="product-actions">
          <Link to={`/products/${product.id}`}>
            <button className="view-details">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products2;
