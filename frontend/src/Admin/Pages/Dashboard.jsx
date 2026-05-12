import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaBox,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 7000 },
  { name: "Jun", sales: 6000 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <div className="card-icon blue">
            <FaDollarSign />
          </div>

          <div>
            <h3>$12,500</h3>
            <p>Total Revenue</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon green">
            <FaShoppingCart />
          </div>

          <div>
            <h3>1,240</h3>
            <p>Total Orders</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon orange">
            <FaUsers />
          </div>

          <div>
            <h3>850</h3>
            <p>Customers</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon purple">
            <FaBox />
          </div>

          <div>
            <h3>320</h3>
            <p>Products</p>
          </div>
        </div>

      </div>

      {/* CHART */}
      <div className="chart-container">

        <div className="chart-header">
          <h2>Sales Analytics</h2>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4f46e5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* TABLE */}
      <div className="table-container">

        <div className="table-header">
          <h2>Recent Orders</h2>
        </div>

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>#1024</td>
              <td>John Doe</td>
              <td>
                <span className="status completed">
                  Completed
                </span>
              </td>
              <td>$250</td>
            </tr>

            <tr>
              <td>#1025</td>
              <td>Emma Watson</td>
              <td>
                <span className="status pending">
                  Pending
                </span>
              </td>
              <td>$180</td>
            </tr>

            <tr>
              <td>#1026</td>
              <td>Michael</td>
              <td>
                <span className="status cancelled">
                  Cancelled
                </span>
              </td>
              <td>$90</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;