import React from "react";
import data from "./data"; // Import product data
import Products2 from "./Products2"; // Import the reusable product card component
import "../styles/ProductList.css"; // Use the styles for the product list

const Products = () => {
  return (
    <div className="product-list-container">
      <h1 className="section-title">Zaimeh Products</h1>
      <div className="product-list">
        {data.map((product) => (
          <Products2 key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
