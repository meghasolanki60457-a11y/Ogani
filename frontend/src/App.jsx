import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

/* ADMIN */
import AdminLayout from "./Admin/Components/Layout";

import Dashboard from "./Admin/Pages/Dashboard";

import Order from "./Admin/Pages/Inventory";
import Setting from "./Admin/Pages/Setting";
import Products from "./Admin/Pages/Products";
import Reports from "./Admin/Pages/Reports";
import Error from "./Admin/Pages/Error";
import Inventory from "./Admin/Pages/Inventory";
import Orders from "./Admin/Pages/Orders";

/* WEBSITE */
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import Feature from "./Components/Feature";
import Latest from "./Components/Latest";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

import Shop from "./Pages/Shop";
import ShopDetail from "./Pages/ShopDetail";
import ShopCard from "./Pages/ShopCard";
import Checkout from "./Pages/Checkout";
import BlogDetails from "./Pages/BlogDetails";
import Block from "./Pages/Block";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";

/* HOME PAGE */
function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Feature />
      <Latest />
      <Blog />
    </>
  );
}

/* WEBSITE LAYOUT */
function Website() {

  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ogani/shop" element={<Shop />} />

        <Route path="/ogani/shop-details" element={<ShopDetail />} />

        <Route path="/ogani/shopping-cart" element={<ShopCard />} />

        <Route path="/ogani/checkout" element={<Checkout />} />

        <Route path="/ogani/blog-details" element={<BlogDetails />} />

        <Route path="/ogani/blog" element={<Block />} />

        <Route path="/ogani/contact" element={<Contact />} />

        <Route path="/ogani/shoping-cart/checkout" element={<Checkout />} />

        <Route path="/ogani/shopping-detail" element={<ShopDetail />} />

        <Route path="/ogani/blog/blog-details" element={<BlogDetails />} />

        <Route path="/ogani/product/:id" element={<ShopDetail />} />

        <Route path="/ogani/shop-details/:id" element={<ShopDetail />} />

        <Route path="/ogani/login" element={<Login />} />

        <Route path="/ogani/sign-in" element={<Sign />} />

      </Routes>

      <Footer />
    </>
  );
}

/* MAIN APP */
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* WEBSITE */}
        <Route path="/*" element={<Website />} />

        {/* ADMIN */}
        <Route path="/admin/*" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="reports" element={<Reports />} />
          <Route path="inventory" element={<Orders />} />

          <Route path="error" element={<Error />} />
          <Route path="products" element={<Products />} />

          <Route path="docs" element={<Setting />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;