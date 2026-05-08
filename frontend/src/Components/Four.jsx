
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
          <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Checkout</h2>
                        <div class="breadcrumb__option">
                            <a href="javascript:void(0)">Home</a>
                            <span>Checkout</span>
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