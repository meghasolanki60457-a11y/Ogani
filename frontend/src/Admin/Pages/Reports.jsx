

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";


const salesData = [
  { name: "Jan", sales: 4000, purchase: 2400 },
  { name: "Feb", sales: 3000, purchase: 1398 },
  { name: "Mar", sales: 5000, purchase: 2800 },
  { name: "Apr", sales: 4780, purchase: 3908 },
  { name: "May", sales: 5890, purchase: 4800 },
  { name: "Jun", sales: 6390, purchase: 3800 },
];

const pieData = [
  { name: "Profit", value: 45 },
  { name: "Expenses", value: 25 },
  { name: "Returns", value: 30 },
];

const COLORS = ["#5B5FEF", "#22C55E", "#EF4444"];

const ReportsPage = () => {
  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="topbar">
        <div>
          <h1>Reports</h1>
          <p>Dashboard / Reports</p>
        </div>

        <button className="export-btn">
          Export Report
        </button>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="card stat-card">
          <h4>Total Sales</h4>
          <h2>$25,458</h2>
          <span className="success">+12% this month</span>
        </div>

        <div className="card stat-card">
          <h4>Total Orders</h4>
          <h2>1,245</h2>
          <span className="primary">+8% this month</span>
        </div>

        <div className="card stat-card">
          <h4>Total Customers</h4>
          <h2>8,540</h2>
          <span className="success">+20% this month</span>
        </div>

        <div className="card stat-card">
          <h4>Total Revenue</h4>
          <h2>$89,450</h2>
          <span className="danger">-3% this month</span>
        </div>

      </div>

      {/* CHARTS */}
      <div className="charts-grid">

        {/* LINE CHART */}
        <div className="card chart-card large-card">

          <div className="card-header">
            <h3>Sales Analytics</h3>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#5B5FEF"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="purchase"
                stroke="#22C55E"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="card chart-card">

          <div className="card-header">
            <h3>Revenue Breakdown</h3>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom-grid">

        {/* TABLE */}
        <div className="card table-card">

          <div className="card-header">
            <h3>Recent Reports</h3>
          </div>

          <table>

            <thead>
              <tr>
                <th>Report</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Sales Report</td>
                <td>12 May 2026</td>
                <td>
                  <span className="badge completed">
                    Completed
                  </span>
                </td>
                <td>$4,500</td>
              </tr>

              <tr>
                <td>Expense Report</td>
                <td>10 May 2026</td>
                <td>
                  <span className="badge pending">
                    Pending
                  </span>
                </td>
                <td>$2,100</td>
              </tr>

              <tr>
                <td>Revenue Report</td>
                <td>08 May 2026</td>
                <td>
                  <span className="badge completed">
                    Completed
                  </span>
                </td>
                <td>$8,700</td>
              </tr>

            </tbody>
          </table>

        </div>

        {/* BAR CHART */}
        <div className="card chart-card">

          <div className="card-header">
            <h3>Monthly Revenue</h3>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip />

              <Bar
                dataKey="sales"
                fill="#5B5FEF"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>
    </div>
  );
};

export default ReportsPage;