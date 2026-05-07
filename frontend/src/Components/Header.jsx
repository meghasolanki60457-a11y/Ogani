import { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false); 

  return (
    <>

      {/* Humberger Menu */}
      <div className="humberger__menu__overlay"></div>

      <div className="humberger__menu__wrapper">

        <div className="humberger__menu__logo">
          <Link to="/">
            <img src="Images/one.png" className="w-25" alt="" />
          </Link>
        </div>

        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart"></i> <span>1</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>

          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>

        <div className="humberger__menu__widget">

          <div className="header__top__right__language">
            <img src="Images/one.png" alt="" className="w-25" />

            <div>English</div>

            <span className="arrow_carrot-down"></span>

            <ul>
              <li><a href="#">Spanish</a></li>
              <li><a href="#">English</a></li>
            </ul>
          </div>

          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user"></i> Login
            </a>
          </div>

        </div>

        {/* Mobile Menu */}
        <nav className="humberger__menu__nav mobile-menu">

          <ul>

            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/pages">Pages</Link>

              <ul className="header__menu__dropdown">

                <li>
                  <Link to="/shop-details">Shop Details</Link>
                </li>

                <li>
                  <Link to="/shopping-cart">Shopping Cart</Link>
                </li>

                <li>
                  <Link to="/checkout">Check Out</Link>
                </li>

                <li>
                  <Link to="/blog-details">Blog Details</Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </nav>

        <div id="mobile-menu-wrap"></div>

        <div className="header__top__right__social">

          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>

          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>

          <a href="#">
            <i className="fa fa-pinterest-p"></i>
          </a>

        </div>

        <div className="humberger__menu__contact">

          <ul>
            <li>
              <i className="fa fa-envelope"></i> hello@colorlib.com
            </li>

            <li>
              Free Shipping for all Order of $99
            </li>
          </ul>

        </div>

      </div>

      {/* Header */}
      <header className="header">

        <div className="header__top">

          <div className="container">

            <div className="row">

              <div className="col-lg-6 col-md-6">

                <div className="header__top__left">

                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>

                    <li>
                      Free Shipping for all Order of $99
                    </li>
                  </ul>

                </div>

              </div>

              <div className="col-lg-6 col-md-6">

                <div className="header__top__right">

                  <div className="header__top__right__social">

                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>

                  </div>

                  <div className="header__top__right__language">

                    <img src="Images/one.png" alt="" className="w-25" />

                    <div>English</div>

                    <span className="arrow_carrot-down"></span>

                    <ul>
                      <li><a href="#">Spanish</a></li>
                      <li><a href="#">English</a></li>
                    </ul>

                  </div>

                  <div className="header__top__right__auth">

                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Main Navbar */}
        <div className="container">

          <div className="row">

            <div className="col-lg-3">

              <div className="header__logo">

                <Link to="/">
                  <img
                    src="Images/one.png"
                    alt=""
                    className="w-25"
                  />
                </Link>

              </div>

            </div>

            <div className="col-lg-6">

              <nav className="header__menu">

                <ul>

                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>

                  <li>

                    <Link to="/pages">Pages</Link>

                    <ul className="header__menu__dropdown">

                      <li>
                        <Link to="/shop-details">
                          Shop Details
                        </Link>
                      </li>

                      <li>
                        <Link to="/shopping-cart">
                          Shopping Cart
                        </Link>
                      </li>

                      <li>
                        <Link to="/checkout">
                          Check Out
                        </Link>
                      </li>

                      <li>
                        <Link to="/blog-details">
                          Blog Details
                        </Link>
                      </li>

                    </ul>

                  </li>

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

                </ul>

              </nav>

            </div>

            <div className="col-lg-3">

              <div className="header__cart">

                <ul>

                  <li>
                    <a href="#">
                      <i className="fa fa-heart"></i>
                      <span>1</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i>
                      <span>3</span>
                    </a>
                  </li>

                </ul>

                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </header>
       <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                   <div className="hero__categories">
  
  <div
    className="hero__categories__all"
    onClick={() => setShowCategories(!showCategories)}
    style={{ cursor: "pointer" }}
  >
    <i className="fa fa-bars"></i>
    <span>All departments</span>
  </div>

  <ul
    style={{
      display: showCategories ? "block" : "none",
      position: "absolute",
      background: "#fff",
      width: "20%",
      zIndex: 999,
      
    }}
  >
    <li><a href="#">Fresh Meat</a></li>
    <li><a href="#">Vegetables</a></li>
    <li><a href="#">Fruit & Nut Gifts</a></li>
    <li><a href="#">Fresh Berries</a></li>
    <li><a href="#">Ocean Foods</a></li>
    <li><a href="#">Butter & Eggs</a></li>
    <li><a href="#">Fastfood</a></li>
    <li><a href="#">Fresh Onion</a></li>
    <li><a href="#">Papayaya & Crisps</a></li>
    <li><a href="#">Oatmeal</a></li>
    <li><a href="#">Fresh Bananas</a></li>
  </ul>

</div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" className="primary-btn">SHOP NOW</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>

    </>
  );
}

export default App;