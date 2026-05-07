function App() {
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit & Nut Gifts</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-7">

              {/* PRODUCT CARD EXAMPLE FIX */}
              <div className="row">

                <div className="col-lg-4">
                  <div className="product__item">

                    {/* ✅ FIX IMAGE */}
                    <div
                      className="product__item__pic"
                      style={{
                           backgroundImage: "url('/Images/one.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "250px"
                      }}
                    >
                      <ul className="product__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                      </ul>
                    </div>

                    <div className="product__item__text">
                      <h6>Crab Pool Security</h6>
                      <h5>$30.00</h5>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;