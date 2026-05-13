import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const products = [
  {
    id: "554433",   // ✅ FIXED (removed #)
    name: "Wireless Headphones",
    stock: 6,
    price: "$120",
    status: "Low Stock",
  },
  {
    id: "887766",
    name: "USB-C Cable Pack",
    stock: 9,
    price: "$40",
    status: "In Stock",
  },
  {
    id: "332211",
    name: "Phone Screen Protector",
    stock: 3,
    price: "$18",
    status: "Low Stock",
  },
  {
    id: "998877",
    name: "Portable Charger",
    stock: 7,
    price: "$75",
    status: "In Stock",
  },
  {
    id: "665544",
    name: "Mechanical Keyboard",
    stock: 2,
    price: "$150",
    status: "Low Stock",
  },
];

const Inventory = () => {
  return (
    <div className="inventory-page">

      {/* HEADER */}
      <div className="inventory-header">

        <div>
          <h2>Inventory</h2>
          <p>Product list</p>
        </div>

        <Link to="/admin/products/create">
          <button className="add-btn">
            + Add Product
          </button>
        </Link>

      </div>

      {/* STATS */}
      <div className="inventory-stats">

        <div className="inventory-card">
          <h3>Total Products</h3>
          <h2>1,250</h2>
          <span className="green">+12%</span>
        </div>

        <div className="inventory-card">
          <h3>Low Stock</h3>
          <h2>32</h2>
          <span className="red">-5%</span>
        </div>

        <div className="inventory-card">
          <h3>Out Of Stock</h3>
          <h2>12</h2>
          <span className="orange">+2%</span>
        </div>

        <div className="inventory-card">
          <h3>Total Revenue</h3>
          <h2>$89,450</h2>
          <span className="green">+18%</span>
        </div>

      </div>

      {/* TABLE */}
      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr key={index}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>

                <td>
                  <span
                    className={
                      item.status === "Low Stock"
                        ? "status low"
                        : "status active"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                {/* ACTION BUTTONS */}
                <td className="action-buttons">

                  {/* ✅ FIXED EDIT ROUTE */}
                  <Link to={`/admin/products/edit/${item.id}`}>
                    <button className="edit-btn">
                      <FaEdit /> Edit
                    </button>
                  </Link>

                  <button className="delete-btn">
                    <FaTrash /> Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* LOW STOCK */}
      <div className="low-stock-section">

        <h2>Low Stock Alerts</h2>

        <div className="low-stock-grid">

          {products
            .filter((item) => item.stock < 5)
            .map((item, index) => (
              <div className="low-stock-card" key={index}>
                <h3>{item.name}</h3>
                <p>ID: {item.id}</p>
                <span>{item.stock} Items Left</span>
              </div>
            ))}

        </div>

      </div>

    </div>
  );
};

export default Inventory;