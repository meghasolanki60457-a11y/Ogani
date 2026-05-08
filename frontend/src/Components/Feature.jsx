import { useState } from "react";

function App() {

  const [activeTab, setActiveTab] = useState("All");

  const products = [

    {
      id: 1,
      category: "Oranges",
      title: "Orange Fresh",
      price: "$30.00",
      image: "/Images/one.png"
    },

    {
      id: 2,
      category: "Fresh Meat",
      title: "Fresh Meat",
      price: "$25.00",
      image: "/Images/one.png"
    },

    {
      id: 3,
      category: "Vegetables",
      title: "Vegetables",
      price: "$18.00",
      image: "/Images/one.png"
    },

    {
      id: 4,
      category: "Fastfood",
      title: "Fastfood",
      price: "$40.00",
      image: "/Images/one.png"
    },

    {
      id: 5,
      category: "Oranges",
      title: "Fresh Orange",
      price: "$22.00",
      image: "/Images/one.png"
    },

    {
      id: 6,
      category: "Vegetables",
      title: "Green Vegetables",
      price: "$15.00",
      image: "/Images/one.png"
    },
     {
      id: 7,
      category: "Vegetables",
      title: "Green Vegetables",
      price: "$15.00",
      image: "/Images/one.png"
    },
     {
      id: 8,
      category: "Vegetables",
      title: "Green Vegetables",
      price: "$15.00",
      image: "/Images/one.png"
    },

  ];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter(
          (item) => item.category === activeTab
        );

  return (

    <>

      <section className="featured spad">

        <div className="container">

          <div className="row">

            <div className="col-lg-12">

              <div className="section-title">

                <h2>Featured Product</h2>

              </div>

              <div className="featured__controls">

                <ul>

                  <li
                    className={activeTab === "All" ? "active" : ""}
                    onClick={() => setActiveTab("All")}
                  >
                    All
                  </li>

                  <li
                    className={activeTab === "Oranges" ? "active" : ""}
                    onClick={() => setActiveTab("Oranges")}
                  >
                    Oranges
                  </li>

                  <li
                    className={activeTab === "Fresh Meat" ? "active" : ""}
                    onClick={() => setActiveTab("Fresh Meat")}
                  >
                    Fresh Meat
                  </li>

                  <li
                    className={activeTab === "Vegetables" ? "active" : ""}
                    onClick={() => setActiveTab("Vegetables")}
                  >
                    Vegetables
                  </li>

                  <li
                    className={activeTab === "Fastfood" ? "active" : ""}
                    onClick={() => setActiveTab("Fastfood")}
                  >
                    Fastfood
                  </li>

                </ul>

              </div>

            </div>

          </div>

          <div className="row featured__filter">

            {
              filteredProducts.map((item) => (

                <div
                  className="col-lg-3 col-md-4 col-sm-6"
                  key={item.id}
                >

                  <div className="featured__item">

                    <div
                      className="featured__item__pic"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "270px"
                      }}
                    >

                      <ul className="featured__item__pic__hover">

                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>

                      </ul>

                    </div>

                    <div className="featured__item__text">

                      <h6>
                        <a href="javascript:void(0)">
                          {item.title}
                        </a>
                      </h6>

                      <h5>{item.price}</h5>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>
       <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="Images/one.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="Images/one.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>

  );
}

export default App;