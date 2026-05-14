import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

/* ADMIN */
import AdminLayout from "./Admin/Components/Layout";

import Dashboard from "./Admin/Pages/Dashboard";
import Setting from "./Admin/Pages/Setting";
import Products from "./Admin/Pages/Products";
import Reports from "./Admin/Pages/Reports";
import Users from "./Admin/Pages/Users";
import Orders from "./Admin/Pages/Orders";
import CreateProduct from "./Admin/Pages/CreateProduct";
import AddUser from "./Admin/Pages/AddUser";
import Loginss from "./Admin/Pages/Loginss";
import EditPage from "./Admin/Pages/EditPage";

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

/* HOME */
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

/* 🔥 ADMIN PROTECTION */
function ProtectedAdminRoute() {
  const isLoggedIn = localStorage.getItem("adminToken");

  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
}

/* WEBSITE LAYOUT */
function Website() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
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

        {/* 🔥 IMPORTANT: /admin redirect to login */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />

        {/* ADMIN LOGIN PAGE */}
        <Route path="/admin/login" element={<Loginss />} />

        {/* PROTECTED ADMIN AREA */}
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Setting />} />
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="products/edit/:id" element={<EditPage />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;