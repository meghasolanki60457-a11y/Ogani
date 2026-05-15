import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: ""
  });

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  // ================= POPUP =================
  const showPopup = (message, type) => {
    setPopup({
      show: true,
      message,
      type
    });

    setTimeout(() => {
      setPopup({
        show: false,
        message: "",
        type: ""
      });
    }, 2500);
  };

  // ================= CHECK LOGIN =================
  const isLoggedIn = () => {
    const user = localStorage.getItem("user");

    // safe check (important fix)
    return user !== null && user !== "null" && user !== "";
  };

  // ================= ADD TO CART =================
  const addToCart = () => {
    if (!product) return;

    // ❌ NOT LOGGED IN
    if (!isLoggedIn()) {
      showPopup("Please Login First 🔐", "error");

      setTimeout(() => {
        navigate("/ogani/login");
      }, 1200);

      return;
    }

    // 🟢 GET CART
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // 🟢 CHECK DUPLICATE PRODUCT
    const alreadyExists = cart.find(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      showPopup("Already in Cart ⚠️", "error");
      return;
    }

    // 🟢 ADD PRODUCT
    cart.push({
      ...product,
      quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    showPopup("Added To Cart ✅", "success");

    // OPTIONAL: redirect to cart
    // setTimeout(() => navigate("/ogani/cart"), 1000);
  };

  // ================= WISHLIST =================
  const addToWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    showPopup("Added To Wishlist ❤️", "wishlist");
  };

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", padding: "100px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <>
      {/* POPUP */}
      {popup.show && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background:
              popup.type === "success"
                ? "#7fad39"
                : popup.type === "wishlist"
                ? "#dd2222"
                : "#ff9800",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            zIndex: 9999,
            fontWeight: "600"
          }}
        >
          {popup.message}
        </div>
      )}

      {/* PRODUCT UI */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <img
                src={product.image}
                alt=""
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div className="col-lg-6">
              <h4>{product.category}</h4>
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>

              <p>{product.description}</p>

              <button
                onClick={addToCart}
                style={{
                  background: "#7fad39",
                  color: "#fff",
                  border: "none",
                  padding: "12px 30px",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
              >
                Add To Cart
              </button>

              <button
                onClick={addToWishlist}
                style={{
                  background: "#dd2222",
                  color: "#fff",
                  border: "none",
                  padding: "12px 30px",
                  cursor: "pointer"
                }}
              >
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ShopDetail;