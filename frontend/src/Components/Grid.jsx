import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";

import { Swiper,  SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "rc-slider/assets/index.css";

function App() {

  // PRICE STATE
  const [price, setPrice] = useState([91, 312]);

  // PRODUCTS STATE
  const [products, setProducts] = useState([]);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  // API CALL
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">

            {/* SIDEBAR */}
            <div className="col-lg-3 col-md-5">

              <div className="sidebar">

                {/* DEPARTMENT */}
                <div className="sidebar__item">

                  <h4>Department</h4>

                  <ul>
                    <li><a href="/">Fresh Meat</a></li>
                    <li><a href="/">Vegetables</a></li>
                    <li><a href="/">Fruit & Nut Gifts</a></li>
                    <li><a href="/">Fresh Berries</a></li>
                    <li><a href="/">Ocean Foods</a></li>
                    <li><a href="/">Butter & Eggs</a></li>
                    <li><a href="/">Fastfood</a></li>
                    <li><a href="/">Fresh Onion</a></li>
                    <li><a href="/">Papayaya & Crisps</a></li>
                    <li><a href="/">Oatmeal</a></li>
                  </ul>

                </div>

                {/* PRICE FILTER */}
                <div className="sidebar__item">

                  <h4>Price</h4>

                  <div className="price-range-wrap">

                    <Slider
                      range
                      min={10}
                      max={540}
                      value={price}
                      onChange={(value) => setPrice(value)}
                    />

                    <div
                      className="range-slider"
                      style={{
                        marginTop: "20px",
                        color: "#dd2222",
                        fontWeight: "700",
                        fontSize: "24px",
                      }}
                    >
                      ${price[0]} - ${price[1]}
                    </div>

                  </div>

                </div>
                {/* COLORS */}
<div className="sidebar__item sidebar__item__color--option">

  <h4>Colors</h4>

  <div className="sidebar__item__color sidebar__item__color--white">
    <label htmlFor="white">
      White
      <input type="radio" id="white" />
    </label>
  </div>

  <div className="sidebar__item__color sidebar__item__color--gray">
    <label htmlFor="gray">
      Gray
      <input type="radio" id="gray" />
    </label>
  </div>

  <div className="sidebar__item__color sidebar__item__color--red">
    <label htmlFor="red">
      Red
      <input type="radio" id="red" />
    </label>
  </div>

  <div className="sidebar__item__color sidebar__item__color--black">
    <label htmlFor="black">
      Black
      <input type="radio" id="black" />
    </label>
  </div>

  <div className="sidebar__item__color sidebar__item__color--blue">
    <label htmlFor="blue">
      Blue
      <input type="radio" id="blue" />
    </label>
  </div>

  <div className="sidebar__item__color sidebar__item__color--green">
    <label htmlFor="green">
      Green
      <input type="radio" id="green" />
    </label>
  </div>

</div>

{/* PRODUCT SIZE */}
<div className="sidebar__item">

  <h4>Popular Size</h4>

  <div className="sidebar__item__size">
    <label htmlFor="large">
      Large
      <input type="radio" id="large" />
    </label>
  </div>

  <div className="sidebar__item__size">
    <label htmlFor="medium">
      Medium
      <input type="radio" id="medium" />
    </label>
  </div>

  <div className="sidebar__item__size">
    <label htmlFor="small">
      Small
      <input type="radio" id="small" />
    </label>
  </div>

  <div className="sidebar__item__size">
    <label htmlFor="tiny">
      Tiny
      <input type="radio" id="tiny" />
    </label>
  </div>

</div>

                {/* LATEST PRODUCTS */}
                <div className="sidebar__item">

                  <div className="latest-product__text">

                    {/* HEADING */}
                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <h4 className="mb-0">
                        Latest Products
                      </h4>

                      {/* NAV BUTTONS */}
                      <div className="latest-product__slider__nav">

                        <button className="latest-prev">
                          <i className="fa fa-angle-left"></i>
                        </button>

                        <button className="latest-next">
                          <i className="fa fa-angle-right"></i>
                        </button>

                      </div>

                    </div>

                    {/* SWIPER */}
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      loop={true}

                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}

                      navigation={{
                        prevEl: ".latest-prev",
                        nextEl: ".latest-next",
                      }}

                      modules={[Navigation, Autoplay]}

                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          ".latest-prev";

                        swiper.params.navigation.nextEl =
                          ".latest-next";
                      }}
                    >

                      {/* SLIDE 1 */}
                      <SwiperSlide>

                        <div className="latest-prdouct__slider__item">

                          {products.slice(0, 3).map((item) => (

                            <Link
                              to={`/ogani/product/${item.id}`}
                              className="latest-product__item"
                              key={item.id}
                            >

                              <div className="latest-product__item__pic">

                                <img
                                  src={item.image}
                                  alt=""
                                  style={{
                                    width: "110px",
                                    height: "110px",
                                    objectFit: "contain"
                                  }}
                                />

                              </div>

                              <div className="latest-product__item__text">

                                <h6>
                                  {item.title.slice(0, 25)}...
                                </h6>

                                <span>
                                  ${item.price}
                                </span>

                              </div>

                            </Link>

                          ))}

                        </div>

                      </SwiperSlide>

                      {/* SLIDE 2 */}
                      <SwiperSlide>

                        <div className="latest-prdouct__slider__item">

                          {products.slice(3, 6).map((item) => (

                            <Link
                              to={`/ogani/product/${item.id}`}
                              className="latest-product__item"
                              key={item.id}
                            >

                              <div className="latest-product__item__pic">

                                <img
                                  src={item.image}
                                  alt=""
                                  style={{
                                    width: "110px",
                                    height: "110px",
                                    objectFit: "contain"
                                  }}
                                />

                              </div>

                              <div className="latest-product__item__text">

                                <h6>
                                  {item.title.slice(0, 25)}...
                                </h6>

                                <span>
                                  ${item.price}
                                </span>

                              </div>

                            </Link>

                          ))}

                        </div>

                      </SwiperSlide>

                    </Swiper>

                  </div>

                </div>

              </div>

            </div>

            {/* PRODUCT SECTION */}
            <div className="col-lg-9 col-md-7">

              {/* SALE OFF */}
              <div className="product__discount">

                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>

                <div className="row">

                  <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}

                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}

                    breakpoints={{
                      0: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 3 }
                    }}
                  >

                    {products.map((item) => (

                      <SwiperSlide key={item.id}>

                        <div className="product__discount__item">

                          <div
                            className="product__discount__item__pic set-bg"
                            style={{
                              backgroundImage: `url(${item.image})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundColor: "#fff",
                              height: "250px"
                            }}
                          >

                            <div className="product__discount__percent">
                              -20%
                            </div>

                            <ul className="product__item__pic__hover">

                              {/* WISHLIST */}
                              <li>
                                <Link to={`/ogani/wishlist/${item.id}`}>
                                  <i className="fa fa-heart"></i>
                                </Link>
                              </li>

                              {/* DETAIL */}
                              <li>
                                <Link to={`/ogani/product/${item.id}`}>
                                  <i className="fa fa-retweet"></i>
                                </Link>
                              </li>

                              {/* CART */}
                             <li>
  <Link to="/ogani/shopping-cart">
    <i className="fa fa-shopping-cart"></i>
  </Link>
</li>

                            </ul>

                          </div>

                          <div className="product__discount__item__text">

                            <span>{item.category}</span>

                            <h5>
                              <Link to={`/ogani/product/${item.id}`}>
                                {item.title}
                              </Link>
                            </h5>

                            <div className="product__item__price">

                              ${item.price}

                              <span>
                                ${(item.price + 10).toFixed(2)}
                              </span>

                            </div>

                          </div>

                        </div>

                      </SwiperSlide>

                    ))}

                  </Swiper>

                </div>

              </div>

              {/* FILTER */}
              <div className="filter__item">

                <div className="row">

                  <div className="col-lg-4 col-md-5">

                    <div className="filter__sort">

                      <span>Sort By</span>

                      <select className="border-0 ps-3">
                        <option value="0">Default</option>
                        <option value="1">Price Low</option>
                        <option value="2">Price High</option>
                      </select>

                    </div>

                  </div>

                  <div className="col-lg-4 col-md-4">

                    <div className="filter__found">

                      <h6>
                        <span>{products.length}</span>
                        {" "}Products found
                      </h6>

                    </div>

                  </div>

                  <div className="col-lg-4 col-md-3">

                    <div className="filter__option">

                      <span className="icon_grid-2x2">
                        <i className="fa-solid fa-border-all"></i>
                      </span>

                      <span className="icon_ul">
                        <i className="fa-solid fa-sliders"></i>
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* PRODUCTS */}
              <div className="row">

                {currentProducts.map((item) => (

                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    key={item.id}
                  >

                    <div className="product__item">

                      {/* PRODUCT IMAGE */}
                      <Link to={`/ogani/product/${item.id}`}>

                        <div
                          className="product__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundColor: "#fff",
                            height: "250px"
                          }}
                        >

                          <ul className="product__item__pic__hover">

                            {/* WISHLIST */}
                            <li>
                              <Link to={`/ogani/wishlist/${item.id}`}>
                                <i className="fa fa-heart"></i>
                              </Link>
                            </li>

                            {/* DETAIL */}
                            <li>
                              <Link to={`/ogani/product/${item.id}`}>
                                <i className="fa fa-retweet"></i>
                              </Link>
                            </li>

                            {/* CART */}
                            <li>
                              <Link to={`/ogani/cart/${item.id}`}>
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>

                          </ul>

                        </div>

                      </Link>

                      {/* PRODUCT TEXT */}
                      <div className="product__item__text">

                        <span
                          style={{
                            color: "#999",
                            fontSize: "14px"
                          }}
                        >
                          {item.category}
                        </span>

                        <h6>

                          <Link to={`/ogani/product/${item.id}`}>
                            {item.title}
                          </Link>

                        </h6>

                        <p
                          style={{
                            fontSize: "13px",
                            minHeight: "50px",
                            marginTop: "10px"
                          }}
                        >
                          {item.description.slice(0, 60)}...
                        </p>

                        <h5>${item.price}</h5>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* PAGINATION */}
              <div className="product__pagination">

                {/* PREV */}
                <button
                  onClick={() =>
                    setCurrentPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  style={{
                    border: "none",
                    background: "transparent",
                    marginRight: "10px",
                    cursor:
                      currentPage === 1
                        ? "not-allowed"
                        : "pointer",
                    opacity:
                      currentPage === 1
                        ? 0.5
                        : 1
                  }}
                >

                  <i className="fa fa-long-arrow-left"></i>

                </button>

                {/* PAGE NUMBERS */}
                {[...Array(totalPages)].map((_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    style={{
                      margin: "0 5px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #ebebeb",
                      background:
                        currentPage === index + 1
                          ? "#7fad39"
                          : "#fff",
                      color:
                        currentPage === index + 1
                          ? "#fff"
                          : "#000",
                      cursor: "pointer"
                    }}
                  >
                    {index + 1}
                  </button>

                ))}

                {/* NEXT */}
                <button
                  onClick={() =>
                    setCurrentPage(currentPage + 1)
                  }
                  disabled={
                    currentPage === totalPages
                  }
                  style={{
                    border: "none",
                    background: "transparent",
                    marginLeft: "10px",
                    cursor:
                      currentPage === totalPages
                        ? "not-allowed"
                        : "pointer",
                    opacity:
                      currentPage === totalPages
                        ? 0.5
                        : 1
                  }}
                >

                  <i className="fa fa-long-arrow-right"></i>

                </button>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;