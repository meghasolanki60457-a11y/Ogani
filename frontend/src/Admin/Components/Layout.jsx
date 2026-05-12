import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "../Assets/style.css";

const Layout = () => {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-section">

        {/* Topbar */}
        <Topbar />

        {/* Pages */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;