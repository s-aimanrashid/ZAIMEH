// AdminDashboard.jsx
import React, { useState } from 'react';
import AdminAddProduct from './AdminAddProduct';
import Products2 from './Products2'; // Your existing product card component

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminAddProduct addProduct={addProduct} />
      
      <div className="product-grid">
        {products.map((product, index) => (
          <Products2 key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
