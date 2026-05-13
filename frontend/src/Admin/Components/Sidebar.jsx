import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowModal(false);
    navigate("/admin/login");
  };

  return (
    <div className="sidebar">

      <h2 className="logo">Admin</h2>

      <div className="menu">

        <NavLink to="/admin" end className="menu-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/orders" className="menu-item">
          <FaBox />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/admin/products" className="menu-item">
          <FaShoppingCart />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/reports" className="menu-item">
          <FaUsers />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/admin/users" className="menu-item">
          <FaChartBar />
          <span>Users</span>
        </NavLink>

        <NavLink to="/admin/settings" className="menu-item">
          <FaCog />
          <span>Settings</span>
        </NavLink>

        {/* LOGOUT BUTTON (MODAL TRIGGER) */}
        <div
          className="menu-item logout"
          onClick={() => setShowModal(true)}
          style={{ cursor: "pointer" }}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </div>

      </div>

      {/* ================= POPUP MODAL ================= */}
      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h3>Are you sure you want to logout?</h3>
            <p>You will be redirected to login page.</p>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Sidebar;