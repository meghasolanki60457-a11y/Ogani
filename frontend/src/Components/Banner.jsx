function App() {
  return (
    <>
      <section className="hero-banner py-0">
        <div className="container">

          <div className="row justify-content-end">

            <div className="col-lg-9">

              <div
                className="hero__item"
                style={{
                  backgroundImage: "url('/Images/one.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "430px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "50px",
                }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>

                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>

                  <p>Free Pickup and Delivery Available</p>

                  <a href="javascript:void(0)" className="primary-btn">
                    SHOP NOW
                  </a>
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