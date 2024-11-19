import React from "react";
import Products from "./Products"; // Import the Products component
import "../styles/ProductList2.css"; // Use CSS for the styling

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Products />
    </div>
  );
};

export default ProductsPage;
