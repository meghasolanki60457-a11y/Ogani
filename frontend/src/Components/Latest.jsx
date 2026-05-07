import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function App() {

  return (

    <>

      <section className="latest-product spad">

        <div className="container">

          <div className="row">



            {/* Latest Products */}
            <div className="col-lg-4 col-md-6">

              <div className="latest-product__text">

                <h4>Latest Products</h4>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                >

                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Meat</h6>
                          <span>$25.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Vegetables</h6>
                          <span>$18.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>





                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Orange</h6>
                          <span>$15.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fastfood</h6>
                          <span>$40.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Apple</h6>
                          <span>$22.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>

                </Swiper>

              </div>

            </div>





            {/* Top Rated Products */}
            <div className="col-lg-4 col-md-6">

              <div className="latest-product__text">

                <h4>Top Rated Products</h4>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                >

                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Top Product</h6>
                          <span>$50.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Organic Food</h6>
                          <span>$28.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Banana</h6>
                          <span>$35.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>





                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Orange</h6>
                          <span>$20.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Sea Food</h6>
                          <span>$60.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Healthy Food</h6>
                          <span>$32.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>

                </Swiper>

              </div>

            </div>





            {/* Review Products */}
            <div className="col-lg-4 col-md-6">

              <div className="latest-product__text">

                <h4>Review Products</h4>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                >

                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Review Product</h6>
                          <span>$60.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Vegetable</h6>
                          <span>$18.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Healthy Fruit</h6>
                          <span>$24.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>





                  <SwiperSlide>

                    <div className="latest-prdouct__slider__item">

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fastfood Item</h6>
                          <span>$45.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Organic Apple</h6>
                          <span>$29.00</span>
                        </div>

                      </a>

                      <a href="#" className="latest-product__item">

                        <div className="latest-product__item__pic">
                          <img src="Images/one.png" alt="" />
                        </div>

                        <div className="latest-product__item__text">
                          <h6>Fresh Meat</h6>
                          <span>$70.00</span>
                        </div>

                      </a>

                    </div>

                  </SwiperSlide>

                </Swiper>

              </div>

            </div>





          </div>

        </div>

      </section>

    </>

  );
}

export default App;