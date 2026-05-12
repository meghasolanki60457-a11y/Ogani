import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";

import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Error";
import Orders from "../Pages/Orders";
import Products from "../Pages/Products";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* Admin Layout */}
      <Route path="/" element={<AdminLayout />}>

        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Users */}
        <Route path="users" element={<Users />} />

        {/* Orders */}
        <Route path="orders" element={<Orders />} />

        {/* Products */}
        <Route path="products" element={<Products />} />

      </Route>

    </Routes>
  );
};

export default AdminRoutes;