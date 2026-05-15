import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShopDetail() {

  // URL SE PRODUCT ID
  const { id } = useParams();

  // PRODUCT STATE
  const [product, setProduct] = useState(null);

  // POPUP STATE
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: ""
  });

  // API CALL
  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  // ================= SHOW POPUP =================
  const showPopup = (message, type) => {

    setPopup({
      show: true,
      message,
      type
    });

    // AUTO CLOSE AFTER 3 SEC
    setTimeout(() => {
      setPopup({
        show: false,
        message: "",
        type: ""
      });
    }, 3000);
  };

  // ================= ADD TO CART =================
  const addToCart = () => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    // ALERT REMOVE
    showPopup("Product Added To Cart ✅", "success");
  };

  // ================= ADD TO WISHLIST =================
  const addToWishlist = () => {

    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    existingWishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(existingWishlist)
    );

    // ALERT REMOVE
    showPopup("Product Added To Wishlist ❤️", "wishlist");
  };

  // LOADING
  if (!product) {
    return (
      <h2
        style={{
          textAlign: "center",
          padding: "100px"
        }}
      >
        Loading...
      </h2>
    );
  }

  return (
    <>
      {/* ================= POPUP ================= */}
      {popup.show && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background:
              popup.type === "success"
                ? "#7fad39"
                : "#dd2222",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            zIndex: "9999",
            fontWeight: "600",
            animation: "slideIn 0.4s ease"
          }}
        >
          {popup.message}
        </div>
      )}

      {/* ================= PAGE ================= */}
      <section
        className="shop-details"
        style={{
          padding: "80px 0"
        }}
      >

        <div className="container">

          <div className="row">

            {/* PRODUCT IMAGE */}
            <div className="col-lg-6">

              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}
              >

                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain"
                  }}
                />

              </div>

            </div>

            {/* PRODUCT DETAILS */}
            <div className="col-lg-6">

              <div
                style={{
                  padding: "20px"
                }}
              >

                {/* CATEGORY */}
                <span
                  style={{
                    color: "#7fad39",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                >
                  {product.category}
                </span>

                {/* TITLE */}
                <h2
                  style={{
                    marginTop: "15px",
                    marginBottom: "20px",
                    fontWeight: "700"
                  }}
                >
                  {product.title}
                </h2>

                {/* PRICE */}
                <h3
                  style={{
                    color: "#dd2222",
                    marginBottom: "25px",
                    fontWeight: "700"
                  }}
                >
                  ${product.price}
                </h3>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#555"
                  }}
                >
                  {product.description}
                </p>

                {/* PRODUCT INFO */}
                <div
                  style={{
                    marginTop: "30px"
                  }}
                >

                  <p>
                    <b>Product ID :</b> {product.id}
                  </p>

                  <p>
                    <b>Category :</b> {product.category}
                  </p>

                  <p>
                    <b>Price :</b> ${product.price}
                  </p>

                </div>

                {/* BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "30px"
                  }}
                >

                  {/* ADD TO CART */}
                  <button
                    onClick={addToCart}
                    style={{
                      background: "#7fad39",
                      color: "#fff",
                      border: "none",
                      padding: "12px 35px",
                      borderRadius: "5px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    Add To Cart
                  </button>

                  {/* WISHLIST */}
                  <button
                    onClick={addToWishlist}
                    style={{
                      background: "#dd2222",
                      color: "#fff",
                      border: "none",
                      padding: "12px 35px",
                      borderRadius: "5px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    Wishlist
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export default ShopDetail;