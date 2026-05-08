import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function App() {
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li><a href="javascript:void(0)">Fresh Meat</a></li>
                    <li><a href="javascript:void(0)">Vegetables</a></li>
                    <li><a href="javascript:void(0)">Fruit & Nut Gifts</a></li>
                    <li><a href="javascript:void(0)">Fresh Berries</a></li>
                    <li><a href="javascript:void(0)">Ocean Foods</a></li>
                    <li><a href="javascript:void(0)">Butter & Eggs</a></li>
                    <li><a href="javascript:void(0)">Fastfood</a></li>
                    <li><a href="javascript:void(0)">Fresh Onion</a></li>
                    <li><a href="javascript:void(0)">Papayaya & Crisps</a></li>
                    <li><a href="javascript:void(0)">Oatmeal</a></li>
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10" data-max="540">
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                      <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount"/>
                          <input type="text" id="maxamount"/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__item sidebar__item__color--option">
                    <h4>Colors</h4>
                    <div className="sidebar__item__color sidebar__item__color--white">
                      <label for="white">
                        White
                        <input type="radio" id="white"/>
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--gray">
                      <label for="gray">
                        Gray
                        <input type="radio" id="gray"/>
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--red">
                      <label for="red">
                        Red
                        <input type="radio" id="red"/>
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--black">
                      <label for="black">
                        Black
                        <input type="radio" id="black"/>
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--blue">
                      <label for="blue">
                        Blue
                        <input type="radio" id="blue"/>
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--green">
                      <label for="green">
                        Green
                        <input type="radio" id="green"/>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__item">
                    <h4>Popular Size</h4>
                    <div className="sidebar__item__size">
                      <label for="large">
                        Large
                        <input type="radio" id="large"/>
                      </label>
                    </div>
                    <div className="sidebar__item__size">
                      <label for="medium">
                        Medium
                        <input type="radio" id="medium"/>
                      </label>
                    </div>
                    <div className="sidebar__item__size">
                      <label for="small">
                        Small
                        <input type="radio" id="small"/>
                      </label>
                    </div>
                    <div className="sidebar__item__size">
                      <label for="tiny">
                        Tiny
                        <input type="radio" id="tiny"/>
                      </label>
                    </div>
                  </div>
                 <div className="sidebar__item">
  <div className="latest-product__text">
    <h4>Latest Products</h4>

    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={false}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {/* SLIDE 1 (3 ITEMS) */}
      <SwiperSlide>
        <div className="latest-prdouct__slider__item">

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="/Images/one.png" alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="/Images/one.png" alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
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

      {/* SLIDE 2 (NEXT 3 ITEMS) */}
      <SwiperSlide>
        <div className="latest-prdouct__slider__item">

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="/Images/one.png" alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src="/Images/one.png" alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>

          <a href="javascript:void(0)" className="latest-product__item">
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
              <div className="col-lg-9 col-md-7">
               <div className="product__discount">
  <div className="section-title product__discount__title">
    <h2>Sale Off</h2>
  </div>

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation={false}
    loop={true}
    spaceBetween={20}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {/* SLIDE 1 */}
    <SwiperSlide>
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{ backgroundImage: "url('/Images/one.png')" }}
        >
          <div className="product__discount__percent">-20%</div>
          <ul className="product__item__pic__hover">
            <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>

        <div className="product__discount__item__text">
          <span>Dried Fruit</span>
          <h5><a href="javascript:void(0)">Raisin’n’nuts</a></h5>
          <div className="product__item__price">$30.00 <span>$36.00</span></div>
        </div>
      </div>
    </SwiperSlide>

    {/* SLIDE 2 */}
    <SwiperSlide>
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{ backgroundImage: "url('/Images/one.png')" }}
        >
          <div className="product__discount__percent">-20%</div>
          <ul className="product__item__pic__hover">
            <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>

        <div className="product__discount__item__text">
          <span>Vegetables</span>
          <h5><a href="javascript:void(0)">Vegetables’package</a></h5>
          <div className="product__item__price">$30.00 <span>$36.00</span></div>
        </div>
      </div>
    </SwiperSlide>

    {/* SLIDE 3 */}
    <SwiperSlide>
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{ backgroundImage: "url('/Images/one.png')" }}
        >
          <div className="product__discount__percent">-20%</div>
          <ul className="product__item__pic__hover">
            <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>

        <div className="product__discount__item__text">
          <span>Fruits</span>
          <h5><a href="javascript:void(0)">Mixed Fruits</a></h5>
          <div className="product__item__price">$40.00 <span>$50.00</span></div>
        </div>
      </div>
    </SwiperSlide>

    {/* SLIDE 4 */}
    <SwiperSlide>
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{ backgroundImage: "url('/Images/one.png')" }}
        >
          <div className="product__discount__percent">-20%</div>
          <ul className="product__item__pic__hover">
            <li><a href="javascript:void(0)"><i className="fa fa-heart"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-retweet"></i></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>

        <div className="product__discount__item__text">
          <span>Dried Fruit</span>
          <h5><a href="javascript:void(0)">Raisin’n’nuts</a></h5>
          <div className="product__item__price">$30.00 <span>$36.00</span></div>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
</div>
                <div className="filter__item">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                          <option value="0">Default</option>
                          <option value="0">Default</option>
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
                        <span className="icon_grid-2x2"></span>
                        <span className="icon_ul"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item"> <div
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                <div className="product__pagination">
                  <a href="javascript:void(0)">1</a>
                  <a href="javascript:void(0)">2</a>
                  <a href="javascript:void(0)">3</a>
                  <a href="javascript:void(0)"><i className="fa fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
export default App;