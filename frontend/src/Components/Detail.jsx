import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
function App() {
    const [count, setCount] = useState(1);
    const [activeImage, setActiveImage] = useState("/Images/one.png");
    const images = [
        "/Images/one.png",
        "/Images/one.png",
        "/Images/one.png",
        "/Images/one.png",
    ];
      const [activeTab, setActiveTab] = useState("description");

    return (
        <>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                         <div className="col-lg-6 col-md-6">

        <div className="product__details__pic">

          {/* Main Image */}
          <div className="product__details__pic__item">

            <img
              className="product__details__pic__item--large"
              src={activeImage}
              alt=""
              style={{
                width: "100%",
                height: "550px",
                objectFit: "cover",
                background: "#f5f5f5",
              }}
            />

          </div>

          {/* Thumbnail Slider */}
          <div style={{ position: "relative", marginTop: "20px" }}>

            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              loop={true}
              navigation={true}
              modules={[Navigation, FreeMode]}
            >

              {images.map((img, index) => (

                <SwiperSlide key={index}>

                  <img
                    src={img}
                    alt=""
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      cursor: "pointer",
                      padding: "5px",
                      background: "#f5f5f5",
                      border:
                        activeImage === img
                          ? "2px solid #7fad39"
                          : "1px solid #ddd",
                    }}
                  />

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </div>
                        <div className="col-lg-6 col-md-6">

                            <div className="product__details__text">

                                <h3>Vetgetable’s Package</h3>

                                <div className="product__details__rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                    <span>(18 reviews)</span>
                                </div>

                                <div className="product__details__price">
                                    $50.00
                                </div>

                                <p>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                    Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Proin eget tortor risus.
                                </p>

                                {/* Quantity Counter */}
                                <div className="product__details__quantity">

                                    <div className="quantity">

                                        <div
                                            className="pro-qty"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >

                                            {/* Minus Button */}
                                            <button
                                                onClick={() =>
                                                    count > 1 && setCount(count - 1)
                                                }
                                                style={{
                                                    border: "none",
                                                    background: "#f5f5f5",
                                                    width: "35px",
                                                    height: "35px",
                                                    fontSize: "20px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                -
                                            </button>

                                            {/* Input */}
                                            <input
                                                type="text"
                                                value={count}
                                                readOnly
                                                style={{
                                                    width: "50px",
                                                    textAlign: "center",
                                                    border: "1px solid #ebebeb",
                                                    height: "35px",
                                                }}
                                            />

                                            {/* Plus Button */}
                                            <button
                                                onClick={() => setCount(count + 1)}
                                                style={{
                                                    border: "none",
                                                    background: "#f5f5f5",
                                                    width: "35px",
                                                    height: "35px",
                                                    fontSize: "20px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </div>

                                <a
                                    href="javascript:void(0)"
                                    className="primary-btn"
                                >
                                    ADD TO CARD
                                </a>

                                <a
                                    href="javascript:void(0)"
                                    className="heart-icon"
                                >
                                   <i class="fa-regular fa-heart"></i>
                                </a>

                                <ul>

                                    <li>
                                        <b>Availability</b>
                                        <span>In Stock</span>
                                    </li>

                                    <li>
                                        <b>Shipping</b>
                                        <span>
                                            01 day shipping.
                                            <samp> Free pickup today</samp>
                                        </span>
                                    </li>

                                    <li>
                                        <b>Weight</b>
                                        <span>0.5 kg</span>
                                    </li>

                                    <li>
                                        <b>Share on</b>

                                        <div className="share">

                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>

                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>

                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>

                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-pinterest"></i>
                                            </a>

                                        </div>

                                    </li>

                                </ul>

                            </div>

                        </div>

                        <div className="col-lg-12">

        <div className="product__details__tab">

          {/* TAB BUTTONS */}
          <ul className="nav nav-tabs" role="tablist">

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "information" ? "active" : ""}`}
                onClick={() => setActiveTab("information")}
              >
                Information
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews <span>(1)</span>
              </button>
            </li>

          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content">

            {/* DESCRIPTION TAB */}
            {activeTab === "description" && (
              <div className="tab-pane active">

                <div className="product__details__tab__desc">

                  <h6>Products Information</h6>

                  <p>
                   Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                  </p>

                  <p>
                   Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                  </p>

                </div>

              </div>
            )}

            {/* INFORMATION TAB */}
            {activeTab === "information" && (
              <div className="tab-pane active">

                <div className="product__details__tab__desc">

                  <h6>Products Information</h6>

                  <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                  </p>

                  <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  </p>

                </div>

              </div>
            )}

            {/* REVIEWS TAB */}
            {activeTab === "reviews" && (
              <div className="tab-pane active">

                <div className="product__details__tab__desc">

                  <h6>Products Reviews</h6>

                  <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                  </p>

                </div>

              </div>
            )}

          </div>
        </div>
      </div>
                    </div>
                </div>
            </section>

            <section className="related-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title related__product__title">
                                <h2>Related Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: "url('/Images/one.png')" }}
                                >
                                    <ul className="product__item__pic__hover">
                                        <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="javascript:void(0)">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: "url('/Images/one.png')" }}
                                >
                                    <ul className="product__item__pic__hover">
                                        <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="javascript:void(0)">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: "url('/Images/one.png')" }}
                                >
                                    <ul className="product__item__pic__hover">
                                        <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="javascript:void(0)">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: "url('/Images/one.png')" }}
                                >
                                    <ul className="product__item__pic__hover">
                                        <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="javascript:void(0)">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
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