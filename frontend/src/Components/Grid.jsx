import React, { useState } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "rc-slider/assets/index.css";

function App() {

  // PRICE STATE
  const [price, setPrice] = useState([91, 312]);

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
                      trackStyle={[{ backgroundColor: "#dd2222", height: 4 }]}
                      handleStyle={[
                        {
                          borderColor: "#fff",
                          backgroundColor: "#fff",
                          width: 18,
                          height: 18,
                          marginTop: -7,
                          border: "2px solid #ddd",
                        },
                        {
                          borderColor: "#fff",
                          backgroundColor: "#fff",
                          width: 18,
                          height: 18,
                          marginTop: -7,
                          border: "2px solid #ddd",
                        },
                      ]}
                      railStyle={{
                        backgroundColor: "#ebebeb",
                        height: 4,
                      }}
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

                {/* SIZE */}
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

          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center mb-4">

            <h4 className="mb-0">Latest Products</h4>

            {/* Navigation Buttons */}
            <div className="latest-product__slider__nav">
              <button className="latest-prev">
                <i className="fa fa-angle-left"></i>
              </button>

              <button className="latest-next">
                <i className="fa fa-angle-right"></i>
              </button>
            </div>

          </div>

          {/* Swiper */}
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
    swiper.params.navigation.prevEl = ".latest-prev";
    swiper.params.navigation.nextEl = ".latest-next";
  }}
>

            <SwiperSlide>

              <div className="latest-prdouct__slider__item">

                <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>

                 <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                   <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="latest-prdouct__slider__item">

                 <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                   <a
                  href="javascript:void(0)"
                  className="latest-product__item"
                >
                  <div className="latest-product__item__pic">
                    <img src="/Images/one.png" alt="" />
                  </div>

                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>

            </SwiperSlide>

          </Swiper>

        </div>
                </div>

              </div>
            </div>

            {/* PRODUCT SECTION */}
            <div className="col-lg-9 col-md-7">
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

      {/* ITEM 1 */}
      <SwiperSlide>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg"
            style={{ backgroundImage: "url('/Images/one.png')" }}
          >
            <div className="product__discount__percent">-20%</div>

            <ul className="product__item__pic__hover">
              <li><a href="#"><i className="fa fa-heart"></i></a></li>
              <li><a href="#"><i className="fa fa-retweet"></i></a></li>
              <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>

          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5><a href="#">Raisin’n’nuts</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </SwiperSlide>

      {/* ITEM 2 */}
      <SwiperSlide>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg"
            style={{ backgroundImage: "url('/Images/one.png')" }}
          >
            <div className="product__discount__percent">-20%</div>

            <ul className="product__item__pic__hover">
              <li><a href="#"><i className="fa fa-heart"></i></a></li>
              <li><a href="#"><i className="fa fa-retweet"></i></a></li>
              <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>

          <div className="product__discount__item__text">
            <span>Vegetables</span>
            <h5><a href="#">Vegetables’package</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </SwiperSlide>

      {/* ITEM 3 */}
      <SwiperSlide>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg"
            style={{ backgroundImage: "url('/Images/one.png')" }}
          >
            <div className="product__discount__percent">-20%</div>

            <ul className="product__item__pic__hover">
              <li><a href="#"><i className="fa fa-heart"></i></a></li>
              <li><a href="#"><i className="fa fa-retweet"></i></a></li>
              <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>

          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5><a href="#">Mixed Fruits</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </SwiperSlide>

      {/* ITEM 4 */}
      <SwiperSlide>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg"
       style={{ backgroundImage: "url('/Images/one.png')" }}
          >
            <div className="product__discount__percent">-20%</div>

            <ul className="product__item__pic__hover">
              <li><a href="#"><i className="fa fa-heart"></i></a></li>
              <li><a href="#"><i className="fa fa-retweet"></i></a></li>
              <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>

          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5><a href="#">Raisin’n’nuts</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

  </div>
</div>
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
                      <h6><span>16</span> Products found</h6>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"><i class="fa-solid fa-border-all"></i></span>
                      <span className="icon_ul"><i class="fa-solid fa-sliders"></i></span>
                    </div>
                  </div>

                </div>
              </div>

              {/* PRODUCTS */}
             <div className="row">

  {[1,2,3,4,5,6,7,8,9].map((item) => (

    <div className="col-lg-4 col-md-6 col-sm-6" key={item}>

      <div className="product__item">

        {/* PRODUCT IMAGE CLICK */}
        <Link to={`/ogani/product/${item}`}>

          <div
            className="product__item__pic set-bg"
            style={{
              backgroundImage: "url('/Images/one.png')"
            }}
          >
            <ul className="product__item__pic__hover">
              <li><a href="/"><i className="fa fa-heart"></i></a></li>
              <li><a href="/"><i className="fa fa-retweet"></i></a></li>
              <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>

        </Link>

        {/* PRODUCT TEXT CLICK */}
        <div className="product__item__text">

          <h6>
            <Link to={`/ogani/product/${item}`}>
              Crab Pool Security
            </Link>
          </h6>

          <h5>$30.00</h5>

        </div>

      </div>
    </div>

  ))}

</div>

              {/* PAGINATION */}
              <div className="product__pagination">
                <a href="/">1</a>
                <a href="/">2</a>
                <a href="/">3</a>
                <a href="/">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;