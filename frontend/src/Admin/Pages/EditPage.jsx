import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // dummy data (real project me API se aayega)
  const [product, setProduct] = useState({
    name: "Wireless Headphones",
    category: "Electronics",
    price: 120,
    stock: 6,
    description: "High quality headphones",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);

    alert("Product Updated Successfully");

    navigate("/admin/products");
  };

  return (
    <div className="create-product">

      {/* HEADER */}
      <div className="page-header">
        <h2>Edit Product</h2>
        <p>Product ID: {id}</p>
      </div>

      {/* FORM */}
      <div className="product-form-card">

        <form className="form-grid" onSubmit={handleUpdate}>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <button className="submit-btn" type="submit">
              Update Product
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;