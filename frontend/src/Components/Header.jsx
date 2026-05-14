import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function App() {

  const [showMenu, setShowMenu] = useState();
  const [showCategories, setShowCategories] = useState(false);

  // LOGIN STATE
  const [isLogin, setIsLogin] = useState(false);

  const location = useLocation();

  // CHECK TOKEN
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, [location]);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    alert("Logout Successfully");
  };

  return (
    <>

      {/* Humberger Menu */}
      <div className="humberger__menu__overlay"></div>

      <div className="humberger__menu__wrapper">

        <div className="humberger__menu__logo">
          <Link to="/">
            <img src="/Images/two.png" className="w-25" alt="logo" />
          </Link>
        </div>

        <div className="humberger__menu__cart">
          <ul>
            <li><i className="fa fa-heart"></i><span>1</span></li>
            <li><i className="fa fa-shopping-bag"></i><span>3</span></li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>

        <div className="humberger__menu__widget">

          <div className="header__top__right__language">
            <img src="/Images/three.png" alt="language" className="w-25" />
            <div>English</div>
            <span className="arrow_carrot-down"></span>
          </div>

          {/* LOGIN / LOGOUT */}
          <div className="header__top__right__auth">
            {
              isLogin ? (
                <button onClick={handleLogout} className="border-0 bg-transparent">
                  <i className="fa fa-sign-out"></i> Logout
                </button>
              ) : (
                <Link to="/ogani/login">
                  <i className="fa fa-user"></i> Login
                </Link>
              )
            }
          </div>

        </div>

        {/* MOBILE MENU */}
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ogani/shop">Shop</Link></li>
            <li><Link to="/ogani/blog">Blog</Link></li>
            <li><Link to="/ogani/contact">Contact</Link></li>
          </ul>
        </nav>

      </div>

      {/* HEADER */}
      <header className="header">

        {/* TOP BAR */}
        <div className="header__top">
          <div className="container">
            <div className="row">

              <div className="col-lg-5">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header__top__right">

                  {/* SOCIAL */}
                  <div className="header__top__right__social">
                    <button className="border-0 bg-transparent px-2"><i className="fa-brands fa-facebook-f"></i></button>
                    <button className="border-0 bg-transparent px-2"><i className="fa-brands fa-twitter"></i></button>
                    <button className="border-0 bg-transparent px-2"><i className="fa-brands fa-linkedin-in"></i></button>
                    <button className="border-0 bg-transparent px-2"><i className="fa-brands fa-pinterest-p"></i></button>
                  </div>

                  {/* LANGUAGE */}
                  <div className="header__top__right__language">
                    <img src="/Images/three.png" alt="lang" className="w-25" />
                    <div>English</div>
                  </div>

                  {/* LOGIN / SIGNUP */}
                  {!isLogin && (
                    <>
                      <div className="header__top__right__auth">
                        <Link to="/ogani/login">
                          <i className="fa fa-user"></i> Login
                        </Link>
                      </div>

                      <div className="header__top__right__auth ps-3">
                        <Link to="/ogani/sign-in">
                          Sign up
                        </Link>
                      </div>
                    </>
                  )}

                  {/* LOGOUT */}
                  {isLogin && (
                    <div className="header__top__right__auth ps-3">
                      <button onClick={handleLogout} className="border-0 bg-transparent">
                        <i className="fa fa-sign-out"></i> Logout
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="/Images/two.png" alt="logo" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li><Link to="/ogani/shop">Shop</Link></li>
                  <li><Link to="/ogani/blog">Blog</Link></li>
                  <li><Link to="/ogani/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li><i className="fa fa-heart"></i><span>1</span></li>
                  <li><i className="fa fa-shopping-bag"></i><span>1</span></li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </header>

      {/* HERO SECTION (FULL RESTORED - IMPORTANT PART) */}
      <section className="hero">
        <div className="container">
          <div className="row">

            {/* CATEGORIES */}
            <div className="col-lg-3">

              <div className="hero__categories">

                <div
                  className="hero__categories__all"
                  onClick={() => setShowCategories(!showCategories)}
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
                  <li>Fresh Meat</li>
                  <li>Vegetables</li>
                  <li>Fruit & Nut Gifts</li>
                  <li>Fresh Berries</li>
                  <li>Ocean Foods</li>
                  <li>Butter & Eggs</li>
                  <li>Fastfood</li>
                </ul>

              </div>

            </div>

            {/* SEARCH FORM */}
            <div className="col-lg-9">

              <div className="hero__search">

                <div className="hero__search__form">

                  <form>
                    <input type="text" placeholder="What do you need?" />

                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>

                </div>

                {/* PHONE SECTION */}
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