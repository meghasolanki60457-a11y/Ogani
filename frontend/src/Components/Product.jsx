import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  // LOAD CART
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // SAFE FIX: ensure quantity always exists
    const safeCart = cart.map((item) => ({
      ...item,
      quantity: item.quantity ? Number(item.quantity) : 1,
      price: Number(String(item.price).replace("$", "")) || 0
    }));

    setCartItems(safeCart);
  }, []);

  // SAVE CART
  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // QTY UPDATE
  const updateQty = (id, type) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty =
          type === "inc"
            ? item.quantity + 1
            : item.quantity > 1
              ? item.quantity - 1
              : 1;

        return { ...item, quantity: newQty };
      }
      return item;
    });

    saveCart(updated);
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    const filtered = cartItems.filter((item) => item.id !== id);
    saveCart(filtered);
  };

  // TOTAL FIX (NO NaN)
  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;

    return sum + price * qty;
  }, 0);

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="mb-4 fw-bold">Shopping Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <h4 className="text-center text-muted py-5">
            Your cart is empty
          </h4>
        ) : (

          <div className="table-responsive">

            <table className="table align-middle text-center">

              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {cartItems.map((item) => (

                  <tr key={item.id}>

                    {/* PRODUCT */}
                    <td className="text-start">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "contain"
                          }}
                        />
                        <span>{item.title}</span>
                      </div>
                    </td>

                    {/* PRICE */}
                    <td>${item.price.toFixed(2)}</td>

                    {/* QTY BUTTONS */}
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-2">

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQty(item.id, "dec")}
                        >
                          -
                        </button>

                        <span className="fw-bold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={() => updateQty(item.id, "inc")}
                        >
                          +
                        </button>

                      </div>
                    </td>

                    {/* TOTAL */}
                    <td className="fw-bold text-success">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    {/* REMOVE */}
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* TOTAL + CONTINUE */}
        {cartItems.length > 0 && (

          <div className="d-flex justify-content-between align-items-center mt-4 p-3 border rounded">

            <h4 className="mb-0">
              Total: <span className="text-success">${total.toFixed(2)}</span>
            </h4>

            <Link
              to="/ogani/shop"
              className="btn btn-success px-4 py-2 fw-bold"
            >
              ← Continue Shopping
            </Link>

          </div>

        )}

      </div>
    </section>
  );
}

export default Cart;