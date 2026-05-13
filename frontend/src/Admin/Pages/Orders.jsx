import { useState } from "react";

const Orders = () => {

  // ORDER DETAILS POPUP
  const [selectedOrder, setSelectedOrder] = useState(null);

  // EXPORT POPUP
  const [showExportPopup, setShowExportPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

        <button
          className="export-btn"
          onClick={() => setShowExportPopup(true)}
        >
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
              <th>Action</th>
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

                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* ORDER DETAILS POPUP */}
      {selectedOrder && (
        <div className="modal-overlay">

          <div className="order-modal">

            <h2>Order Details</h2>

            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>

            <p>
              <strong>Customer:</strong> {selectedOrder.customer}
            </p>

            <p>
              <strong>Date:</strong> {selectedOrder.date}
            </p>

            <p>
              <strong>Amount:</strong> {selectedOrder.amount}
            </p>

            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>

            <button
              className="close-modal-btn"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* EXPORT POPUP */}
      {showExportPopup && (
        <div className="modal-overlay">

          <div className="order-modal">

            <h2>Export Orders</h2>

            <p>
              Do you want to export all customer orders?
            </p>

            <div className="popup-buttons">
<button
  className="view-btn"
  onClick={() => {
    setShowExportPopup(false);
    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2000);
  }}
>
  Yes Export
</button>

              <button
                className="close-modal-btn"
                onClick={() => setShowExportPopup(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}
      {/* SUCCESS POPUP */}
{showSuccessPopup && (
  <div className="success-popup">
    Orders Exported Successfully!
  </div>
)}

    </div>
  );
};

export default Orders;