import { useState } from "react";


const Orders = () => {
  const [orders] = useState([
    {
      id: "#ORD1001",
      customer: "Aarav Sharma",
      date: "2026-01-20",
      amount: "$120",
      status: "Pending",
    },
    {
      id: "#ORD1002",
      customer: "Priya Verma",
      date: "2026-01-18",
      amount: "$450",
      status: "Delivered",
    },
    {
      id: "#ORD1003",
      customer: "Rahul Singh",
      date: "2026-01-16",
      amount: "$80",
      status: "Cancelled",
    },
    {
      id: "#ORD1004",
      customer: "Sneha Patel",
      date: "2026-01-15",
      amount: "$320",
      status: "Processing",
    },
  ]);

  return (
    <div className="orders-page">

      {/* HEADER */}
      <div className="orders-header">
        <div>
          <h2>Orders</h2>
          <p>Manage all customer orders</p>
        </div>

        <button className="export-btn">
          Export Orders
        </button>
      </div>

      {/* STATS */}
      <div className="orders-stats">

        <div className="stat-card">
          <h3>Total Orders</h3>
          <h2>1,240</h2>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <h2>320</h2>
        </div>

        <div className="stat-card">
          <h3>Delivered</h3>
          <h2>820</h2>
        </div>

        <div className="stat-card">
          <h3>Cancelled</h3>
          <h2>100</h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="orders-table-card">

        <div className="table-header">
          <h3>All Orders</h3>
        </div>

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>

                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>

                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Orders;