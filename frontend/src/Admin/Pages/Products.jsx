import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  // POPUP STATES
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const products = [
    { id: "554433", name: "Wireless Headphones", category: "Electronics", price: "$120", stock: 6, status: "Low Stock" },
    { id: "887766", name: "USB-C Cable Pack", category: "Accessories", price: "$40", stock: 9, status: "In Stock" },
    { id: "332211", name: "Phone Screen Protector", category: "Mobile", price: "$18", stock: 3, status: "Low Stock" },
    { id: "998877", name: "Portable Charger", category: "Electronics", price: "$75", stock: 7, status: "In Stock" },
    { id: "665544", name: "Mechanical Keyboard", category: "Computer", price: "$150", stock: 2, status: "Low Stock" },
  ];

  return (
    <div className="products-page">

      {/* HEADER */}
      <div className="products-header">

        <div>
          <h2>Products</h2>
          <p className="products-subtitle">Manage all your products here</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => navigate("/admin/products/create")}
        >
          + Add Product
        </button>

      </div>

      {/* TABLE */}
      <div className="products-table-card">

        <table className="products-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
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
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>

                <td>
                  <span className={item.status === "In Stock" ? "status-badge in-stock" : "status-badge low-stock"}>
                    {item.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td style={{ display: "flex", gap: "10px" }}>

                  {/* VIEW POPUP */}
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="view-btn"
                  >
                    View
                  </button>

                  {/* DELETE POPUP */}
                  <button
                    onClick={() => setDeleteProduct(item)}
                    className="delete-btn"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* ================= VIEW POPUP ================= */}
      {selectedProduct && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Product Details</h2>

            <p><b>ID:</b> {selectedProduct.id}</p>
            <p><b>Name:</b> {selectedProduct.name}</p>
            <p><b>Category:</b> {selectedProduct.category}</p>
            <p><b>Price:</b> {selectedProduct.price}</p>
            <p><b>Stock:</b> {selectedProduct.stock}</p>
            <p><b>Status:</b> {selectedProduct.status}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* ================= DELETE POPUP ================= */}
      {deleteProduct && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Confirm Delete</h2>

            <p>Are you sure you want to delete:</p>

            <h4>{deleteProduct.name}</h4>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>

              <button
                className="delete-btn"
                onClick={() => {
                  alert("Deleted Successfully!");
                  setDeleteProduct(null);
                }}
              >
                Yes Delete
              </button>

              <button
                className="close-btn"
                onClick={() => setDeleteProduct(null)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Products;