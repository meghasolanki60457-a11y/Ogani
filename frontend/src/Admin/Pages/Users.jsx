import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: "#U1001", name: "Aarav Sharma", email: "aarav@example.com", role: "Customer", status: "Active" },
    { id: "#U1002", name: "Priya Verma", email: "priya@example.com", role: "Admin", status: "Active" },
    { id: "#U1003", name: "Rahul Singh", email: "rahul@example.com", role: "Customer", status: "Blocked" },
    { id: "#U1004", name: "Sneha Patel", email: "sneha@example.com", role: "Vendor", status: "Active" },
  ];

  // OPEN MODAL
  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  // DELETE ACTION (demo only)
  const deleteUser = () => {
    console.log("Deleted user:", selectedUser);
    closeModal();
  };

  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="users-header">
        <div>
          <h1>Users</h1>
          <p>Manage all platform users</p>
        </div>

        <Link to="/admin/users/add" className="add-user-btn">
          + Add User
        </Link>
      </div>

      {/* TABLE */}
      <div className="users-table-card">

        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>
                  <span className={user.status === "Active" ? "status active" : "status blocked"}>
                    {user.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => openModal(user)}
                    style={{
                      padding: "6px 12px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Delete User</h2>

            <p>
              Are you sure you want to delete{" "}
              <b>{selectedUser?.name}</b>?
            </p>

            <div className="modal-actions">

              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>

              <button className="delete-btn" onClick={deleteUser}>
                Yes, Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Users;