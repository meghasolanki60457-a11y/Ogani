import React, { useEffect, useState } from "react";

function Wishlist() {

  const [wishlistItems, setWishlistItems] = useState([]);

  // LOAD + REMOVE DUPLICATES
  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    // REMOVE DUPLICATE PRODUCTS (BY ID)
    const uniqueWishlist = Array.from(
      new Map(savedWishlist.map(item => [item.id, item])).values()
    );

    setWishlistItems(uniqueWishlist);
    localStorage.setItem("wishlist", JSON.stringify(uniqueWishlist));

  }, []);

  // DELETE ITEM
  const removeItem = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);

    setWishlistItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (

    <section className="py-5">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Wishlist ❤️</h2>
          <p className="text-muted">Saved Products</p>
        </div>

        {/* EMPTY STATE */}
        {wishlistItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">No Product In Wishlist</h4>
          </div>
        ) : (

          <div className="row g-4">

            {wishlistItems.map((item) => (

              <div
                className="col-lg-4 col-md-6 col-sm-12"
                key={item.id}
              >

                <div className="card h-100 shadow-sm border-0">

                  {/* IMAGE */}
                  <div className="text-center p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        height: "200px",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  {/* BODY */}
                  <div className="card-body text-center">

                    <h5 className="fw-bold">
                      {item.title}
                    </h5>

                    <p className="text-muted mb-2">
                      {item.category}
                    </p>

                    <h5 className="text-danger fw-bold">
                      ${item.price}
                    </h5>

                  </div>

                  {/* DELETE BUTTON */}
                  <div className="card-footer bg-white border-0 text-center pb-3">

                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger px-4 py-2 rounded-pill"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>

  );
}

export default Wishlist;