import { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  
  const [showMenu, setShowMenu] = useState();
  const [showCategories, setShowCategories] = useState(false); 

  return (
    <>

      {/* Humberger Menu */}
      <div className="humberger__menu__overlay"></div>

      <div className="humberger__menu__wrapper">

        <div className="humberger__menu__logo">
          <Link to="/">
            <img src="Images/two.png" className="w-25" alt="" />
          </Link>
        </div>

        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <i className="fa fa-heart"></i> <span>1</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
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
            <img src="Images/three.png" alt="" className="w-25" />

            <div>English</div>

            <span className="arrow_carrot-down"></span>

            <ul>
              <li><a href="javascript:void(0)">Spanish</a></li>
              <li><a href="javascript:void(0)">English</a></li>
            </ul>
          </div>

          <div className="header__top__right__auth">
           <Link to="/ogani/login">
  <i className="fa fa-user"></i> Login
</Link>
          </div>

        </div>

        {/* Mobile Menu */}
        <nav className="humberger__menu__nav mobile-menu">

          <ul>

            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/ogani/shop">Shop</Link>
            </li>

            <li>
              <Link to="/ogani/shop-details">Pages</Link>

              <ul className="header__menu__dropdown">

                <li>
                  <Link to="/ogani/shop-details">Shop Details</Link>
                </li>

                <li>
                  <Link to="/ogani/shopping-cart">Shopping Cart</Link>
                </li>

                <li>
                  <Link to="/ogani/checkout">Check Out</Link>
                </li>

                <li>
                  <Link to="/ogani/blog-details">Blog Details</Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to="/ogani/blog">Blog</Link>
            </li>

            <li>
              <Link to="/ogani/contact">Contact</Link>
            </li>

          </ul>

        </nav>

        <div id="mobile-menu-wrap"></div>

        <div className="header__top__right__social">

          <a href="javascript:void(0)">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="javascript:void(0)">
            <i className="fa fa-twitter"></i>
          </a>

          <a href="javascript:void(0)">
            <i className="fa fa-linkedin"></i>
          </a>

          <a href="javascript:void(0)">
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

              <div className="col-lg-5 col-md-5">

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

                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>

                  </div>

                  <div className="header__top__right__language">

                    <img src="Images/three.png" alt="" className="w-25" />

                    <div>English</div>

                    <span className="arrow_carrot-down"></span>

                    <ul>
                      <li><a href="javascript:void(0)">Spanish</a></li>
                      <li><a href="javascript:void(0)">English</a></li>
                    </ul>

                  </div>

                  <div className="header__top__right__auth">

                  <Link to="/ogani/login">
  <i className="fa fa-user"></i> Login
</Link>

                  </div>
                   <div className="header__top__right__auth ps-3 ">
                    <Link to="/ogani/sign-in">
   Sign In
</Link>
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
                    src="Images/two.png"
                    alt=""
                    
                  />
                </Link>

              </div>

            </div>

            <div className="col-lg-6">

              <nav className="header__menu">

      <ul>

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/ogani/shop" ? "active" : ""}>
          <Link to="/ogani/shop">Shop</Link>
        </li>

        <li className={location.pathname === "/ogani/blog" ? "active" : ""}>
          <Link to="/ogani/blog">Blog</Link>
        </li>

        <li className={location.pathname === "/ogani/contact" ? "active" : ""}>
          <Link to="/ogani/contact">Contact</Link>
        </li>

      </ul>

    </nav>

            </div>

            <div className="col-lg-3">

              <div className="header__cart">

                <ul>

                  <li>
                     <Link to="/ogani/shopping-detail">
 <i className="fa fa-heart"></i>
  <span>1</span>
</Link>
                    
                  </li>

                  <li>
                    <Link to="/ogani/shopping-cart">
<i className="fa fa-shopping-bag"></i>
  <span>1</span>
</Link>
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

  <ul className="bg-white"
    style={{
      display: showCategories ? "block" : "none",
      position: "absolute",
      background: "javascript:void(0)fff",
      width: "20%",
      zIndex: 999,
      
      
    }}
  >
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
    <li><a href="javascript:void(0)">Fresh Bananas</a></li>
  </ul>

</div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="javascript:void(0)">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"><wa-icon name="angle-down"></wa-icon></span>
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
                 
                </div>
            </div>
        </div>
    </section>

    </>
  );
}

export default App;