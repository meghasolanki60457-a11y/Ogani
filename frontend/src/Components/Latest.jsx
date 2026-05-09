import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

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
            navigation={{
              prevEl: ".latest-prev",
              nextEl: ".latest-next",
            }}
            modules={[Navigation]}
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





            {/* Top Rated Products */}
          <div className="col-lg-4 col-md-6">
  <div className="latest-product__text">

    {/* Heading + Navigation */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="mb-0">Top Rated Products</h4>

      <div className="latest-product__slider__nav">
        <button className="top-rated-prev">
          <i className="fa fa-angle-left"></i>
        </button>

        <button className="top-rated-next">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>

    {/* Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      navigation={{
        prevEl: ".top-rated-prev",
        nextEl: ".top-rated-next",
      }}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = ".top-rated-prev";
        swiper.params.navigation.nextEl = ".top-rated-next";
      }}
    >

      <SwiperSlide>
        <div className="latest-prdouct__slider__item">

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Top Product</h6>
              <span>$50.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Organic Food</h6>
              <span>$28.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
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

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Fresh Orange</h6>
              <span>$20.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Sea Food</h6>
              <span>$60.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
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

    {/* Heading + Navigation */}
    <div className="d-flex justify-content-between align-items-center mb-4">

      <h4 className="mb-0">Review Products</h4>

      <div className="latest-product__slider__nav">
        <button className="review-prev">
          <i className="fa fa-angle-left"></i>
        </button>

        <button className="review-next">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>

    </div>

    {/* Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      navigation={{
        prevEl: ".review-prev",
        nextEl: ".review-next",
      }}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = ".review-prev";
        swiper.params.navigation.nextEl = ".review-next";
      }}
    >

      <SwiperSlide>

        <div className="latest-prdouct__slider__item">

          <a href="javascript:void(0)" className="latest-product__item">

            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Review Product</h6>
              <span>$60.00</span>
            </div>

          </a>

          <a href="javascript:void(0)" className="latest-product__item">

            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Fresh Vegetable</h6>
              <span>$18.00</span>
            </div>

          </a>

          <a href="javascript:void(0)" className="latest-product__item">

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

          <a href="javascript:void(0)" className="latest-product__item">

            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Fastfood Item</h6>
              <span>$45.00</span>
            </div>

          </a>

          <a href="javascript:void(0)" className="latest-product__item">

            <div className="latest-product__item__pic">
              <img src="Images/one.png" alt="" />
            </div>

            <div className="latest-product__item__text">
              <h6>Organic Apple</h6>
              <span>$29.00</span>
            </div>

          </a>

          <a href="javascript:void(0)" className="latest-product__item">

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