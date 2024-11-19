import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(
    product.color || product.colors[0].name
  );

  const [quantity, setQuantity] = useState(0); 

  if (!product) {
    return <div>Product not found</div>;
  }

  const currentColor = product.colors?.find(
    (color) => color.name === selectedColor
  ) || { image: product.image };


  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); 
  };

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={currentColor.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>Rs.{product.price} PKR</h3>

        <div className="product-color">
          <h4>Color:</h4>
          <div className="color-options">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="color-box"
                style={{ backgroundColor: color.hexCode }}
                onClick={() => setSelectedColor(color.name)}
              ></span>
            ))}
          </div>
        </div>

        <div className="product-size">
          <h4>Size</h4>
          <div className="size-options">
            {product.sizes.map((size) => (
              <span key={size} className="size-box">
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="quantity-controls">
          <h4>Quantity:</h4>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
