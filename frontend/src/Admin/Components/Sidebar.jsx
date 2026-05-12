import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2 className="logo">Admin</h2>

      <div className="menu">

        <NavLink to="/admin" end className="menu-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/inventory" className="menu-item">
          <FaBox />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/admin/products" className="menu-item">
          <FaShoppingCart />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/reports" className="menu-item">
          <FaUsers />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/admin/error" className="menu-item">
          <FaChartBar />
          <span>404 Error</span>
        </NavLink>

        <NavLink to="/admin/docs" className="menu-item">
          <FaCog />
          <span>Docs</span>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;