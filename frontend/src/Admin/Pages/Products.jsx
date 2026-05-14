import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // ================= API STATES =================
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
  });

  const [editProduct, setEditProduct] = useState({
    id: "",
    title: "",
    price: "",
  });

  // ================= GET ALL PRODUCTS API =================
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("All Products:", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // ================= GET SINGLE PRODUCT API =================
  const getSingleProduct = async (id) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      const data = await res.json();

      console.log("Single Product:", data);

      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= ADD PRODUCT API =================
  const addProduct = async () => {
    try {
      const productData = {
        title: newProduct.title,
        price: newProduct.price,
      };

      const res = await fetch(
        "https://fakestoreapi.com/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      const data = await res.json();

      console.log("Added Product:", data);

      setProducts([...products, data]);

      setNewProduct({
        title: "",
        price: "",
      });

      setShowAddPopup(false);
      setShowSuccessPopup(true);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE PRODUCT API =================
  const deleteProductAPI = async () => {
    try {
      await fetch(
        `https://fakestoreapi.com/products/${deleteProduct.id}`,
        {
          method: "DELETE",
        }
      );

      const updated = products.filter(
        (p) => p.id !== deleteProduct.id
      );

      setProducts(updated);
      setDeleteProduct(null);

    } catch (error) {
      console.log(error);
    }
  };

  // ================= UPDATE PRODUCT API =================
  const updateProduct = async () => {
    try {
      const updatedData = {
        title: editProduct.title,
        price: editProduct.price,
      };

      const res = await fetch(
        `https://fakestoreapi.com/products/${editProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      console.log("Updated Product:", data);

      const updatedList = products.map((p) =>
        p.id === editProduct.id
          ? { ...p, title: editProduct.title, price: editProduct.price }
          : p
      );

      setProducts(updatedList);

      setEditProduct({
        id: "",
        title: "",
        price: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products-page">

      {/* HEADER */}
      <div className="products-header">
        <div>
          <h2>Products</h2>
          <p className="products-subtitle">
            Manage all your products here
          </p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowAddPopup(true)}
        >
          + Add Product
        </button>
      </div>

      {/* EDIT SECTION */}
      <div style={{ background: "#fff", padding: "15px", marginBottom: "15px" }}>
        <h3>Edit Product</h3>

        <input
          type="text"
          placeholder="Title"
          value={editProduct.title}
          onChange={(e) =>
            setEditProduct({ ...editProduct, title: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={editProduct.price}
          onChange={(e) =>
            setEditProduct({ ...editProduct, price: e.target.value })
          }
        />

        <button onClick={updateProduct} className="add-product-btn">
          Update Product
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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map((item) => (
              <tr key={item.id}>

                <td>#{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>

                <td style={{ display: "flex", gap: "10px" }}>

                  <button
                    className="view-btn"
                    onClick={() => getSingleProduct(item.id)}
                  >
                    View
                  </button>

                  <button
                    className="add-product-btn"
                    onClick={() =>
                      setEditProduct({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                      })
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => setDeleteProduct(item)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* ADD POPUP */}
      {showAddPopup && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Add Product</h2>

            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <button onClick={addProduct} className="add-product-btn">
              Save
            </button>

            <button
              className="close-btn"
              onClick={() => setShowAddPopup(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Success 🎉</h2>
            <p>Product added successfully!</p>

            <button
              className="add-product-btn"
              onClick={() => setShowSuccessPopup(false)}
            >
              OK
            </button>

          </div>
        </div>
      )}

      {/* SINGLE PRODUCT */}
      {singleProduct && (
        <div className="modal-overlay">
          <div className="modal-box text-start">

            <h2>Product Details</h2>

            <p><b>ID:</b> {singleProduct.id}</p>
            <p><b>Name:</b> {singleProduct.title}</p>
            <p><b>Price:</b> ${singleProduct.price}</p>
            <p><b>Category:</b> {singleProduct.category}</p>

            <button
              className="close-btn"
              onClick={() => setSingleProduct(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* DELETE POPUP */}
      {deleteProduct && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Confirm Delete</h2>

            <p>Are you sure you want to delete:</p>
            <h4>{deleteProduct.title}</h4>

            <button
              className="delete-btn"
              onClick={deleteProductAPI}
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
      )}

    </div>
  );
};

export default Products;