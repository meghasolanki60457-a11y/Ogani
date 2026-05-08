
function App() {
  return (
    <>
      <section
        className="breadcrumb-section set-bg"
        style={{
        backgroundImage: "url('/Images/one.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>OVegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <a href="javascript:void(0)">Home</a>
                  <a href="javascript:void(0)">Vegetables</a>
                  <span> Vegetable’s Package</span>
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