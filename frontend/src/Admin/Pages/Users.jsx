import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  const [showModal, setShowModal] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleUser, setSingleUser] = useState(null);

  const [editUser, setEditUser] = useState({
    id: "",
    username: "",
    email: "",
  });

  // ================= PAGINATION STATES (ADDED ONLY) =================
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleViewUser = (user) => {
    setSingleUser(user);
    setShowViewPopup(true);
  };

  const getSingleUser = async (id) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      const data = await res.json();
      setSingleUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const deleteUser = async () => {
    try {
      await fetch(`https://fakestoreapi.com/users/${selectedUser.id}`, {
        method: "DELETE",
      });

      const updatedUsers = users.filter(
        (user) => user.id !== selectedUser.id
      );

      setUsers(updatedUsers);

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (user) => {
    setEditUser({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    setShowEditPopup(true);
  };

  const updateUser = async () => {
    try {
      await fetch(`https://fakestoreapi.com/users/${editUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: editUser.username,
          email: editUser.email,
        }),
      });

      const updatedUsers = users.map((user) =>
        user.id === editUser.id
          ? { ...user, ...editUser }
          : user
      );

      setUsers(updatedUsers);

      setShowEditPopup(false);

    } catch (error) {
      console.log(error);
    }
  };

  // ================= PAGINATION LOGIC (ADDED ONLY) =================
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

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

        {loading ? (
          <h2 style={{ textAlign: "center", padding: "30px" }}>
            Loading...
          </h2>
        ) : (

          <table className="users-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {/* PAGINATED DATA ONLY CHANGE HERE */}
              {currentUsers.map((user, index) => (

                <tr key={user.id}>

                  <td>{indexOfFirstUser + index + 1}</td>

                  <td>
                    {user.name?.firstname} {user.name?.lastname}
                  </td>

                  <td>{user.email}</td>
                  <td>{user.username}</td>

                  <td>
                    <span className="status active">
                      Active
                    </span>
                  </td>

                  <td style={{ display: "flex", gap: "10px" }}>

                    <button
                      onClick={() => handleViewUser(user)}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleEditClick(user)}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => openModal(user)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

        {/* ================= PAGINATION UI (ADDED ONLY) ================= */}
        <div className="d-flex justify-content-center mt-3 gap-2 flex-wrap">

          <button
            className="btn btn-outline-primary btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn btn-sm ${
                currentPage === i + 1
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-primary btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

        </div>

      </div>

      {/* VIEW POPUP */}
      {showViewPopup && singleUser && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content p-3">

              <h4>User Details</h4>

              <p><b>Name:</b> {singleUser.name?.firstname} {singleUser.name?.lastname}</p>
              <p><b>Email:</b> {singleUser.email}</p>
              <p><b>Username:</b> {singleUser.username}</p>

              <div className="text-end">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowViewPopup(false)}
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* EDIT POPUP */}
      {showEditPopup && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content p-3">

              <h4>Edit User</h4>

              <input
                className="form-control mb-2"
                value={editUser.username}
                onChange={(e) =>
                  setEditUser({ ...editUser, username: e.target.value })
                }
              />

              <input
                className="form-control mb-3"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />

              <div className="d-flex justify-content-end gap-2">

                <button className="btn btn-success" onClick={updateUser}>
                  Update
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => setShowEditPopup(false)}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* DELETE POPUP */}
      {showModal && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content p-3 text-center">

              <h4>Delete User</h4>

              <p>Are you sure you want to delete this user?</p>

              <div className="d-flex justify-content-center gap-3">

                <button className="btn btn-danger" onClick={deleteUser}>
                  Yes Delete
                </button>

                <button className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Users;