import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function App() {

  return (

    <section className="latest-product spad">

      <div className="container">

        <div className="row">

          {/* Latest Products */}
          <div className="col-lg-4 col-md-6">

            <div className="latest-product__text">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4 className="mb-0">Latest Products</h4>

                <div className="latest-product__slider__nav">
                  <button className="latest-prev">
                    <i className="fa fa-angle-left"></i>
                  </button>

                  <button className="latest-next">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>

              </div>

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

                {/* SLIDE 1 */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 2</h6>
                        <span>$40.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 3</h6>
                        <span>$50.00</span>
                      </div>
                    </a>

                  </div>

                </SwiperSlide>

                {/* SLIDE 2 (THIS IS YOUR MISSING PRODUCTS FIX) */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 4</h6>
                        <span>$60.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 5</h6>
                        <span>$70.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 6</h6>
                        <span>$80.00</span>
                      </div>
                    </a>

                  </div>

                </SwiperSlide>

              </Swiper>

            </div>

          </div>
           <div className="col-lg-4 col-md-6">

            <div className="latest-product__text">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4 className="mb-0">Top Rated Products</h4>

                <div className="latest-product__slider__nav">
                  <button className="latest-prev">
                    <i className="fa fa-angle-left"></i>
                  </button>

                  <button className="latest-next">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>

              </div>

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

                {/* SLIDE 1 */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 2</h6>
                        <span>$40.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 3</h6>
                        <span>$50.00</span>
                      </div>
                    </a>

                  </div>

                </SwiperSlide>

                {/* SLIDE 2 (THIS IS YOUR MISSING PRODUCTS FIX) */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 4</h6>
                        <span>$60.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 5</h6>
                        <span>$70.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 6</h6>
                        <span>$80.00</span>
                      </div>
                    </a>

                  </div>

                </SwiperSlide>

              </Swiper>

            </div>

          </div>
           <div className="col-lg-4 col-md-6">

            <div className="latest-product__text">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4 className="mb-0">
Review Products</h4>

                <div className="latest-product__slider__nav">
                  <button className="latest-prev">
                    <i className="fa fa-angle-left"></i>
                  </button>

                  <button className="latest-next">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>

              </div>

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

                {/* SLIDE 1 */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 1</h6>
                        <span>$30.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 2</h6>
                        <span>$40.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 3</h6>
                        <span>$50.00</span>
                      </div>
                    </a>

                  </div>

                </SwiperSlide>

                {/* SLIDE 2 (THIS IS YOUR MISSING PRODUCTS FIX) */}
                <SwiperSlide>

                  <div className="latest-prdouct__slider__item">

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 4</h6>
                        <span>$60.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 5</h6>
                        <span>$70.00</span>
                      </div>
                    </a>

                    <a href="javascript:void(0)" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="/Images/one.png" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Product 6</h6>
                        <span>$80.00</span>
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

  );
}

export default App;