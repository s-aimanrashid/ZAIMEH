// AdminAddProduct.jsx
import React, { useState } from 'react';

const AdminAddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    colors: [{ name: '', hexCode: '' }],
    sizes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleColorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedColors = [...product.colors];
    updatedColors[index] = { ...updatedColors[index], [name]: value };
    setProduct({ ...product, colors: updatedColors });
  };

  const addNewColor = () => {
    setProduct({ ...product, colors: [...product.colors, { name: '', hexCode: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      title: '',
      description: '',
      price: '',
      image: '',
      colors: [{ name: '', hexCode: '' }],
      sizes: [],
    });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
          required
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleInputChange}
          required
        />

        <label>Sizes (comma-separated):</label>
        <input
          type="text"
          name="sizes"
          value={product.sizes.join(',')}
          onChange={(e) => setProduct({ ...product, sizes: e.target.value.split(',') })}
        />

        <h3>Colors:</h3>
        {product.colors.map((color, index) => (
          <div key={index}>
            <label>Color Name:</label>
            <input
              type="text"
              name="name"
              value={color.name}
              onChange={(e) => handleColorChange(index, e)}
            />

            <label>Color Hex Code:</label>
            <input
              type="text"
              name="hexCode"
              value={color.hexCode}
              onChange={(e) => handleColorChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={addNewColor}>
          Add Another Color
        </button>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
