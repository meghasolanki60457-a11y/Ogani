import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  // ================= STATES =================

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // USERS STATE
  const [users, setUsers] = useState([]);

  // LOADING STATE
  const [loading, setLoading] = useState(true);

  // SINGLE USER STATE
  const [singleUser, setSingleUser] = useState(null);

  // EDIT USER STATE
  const [editUser, setEditUser] = useState({
    id: "",
    username: "",
    email: "",
  });

  // ================= GET ALL USERS API =================

  useEffect(() => {

    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {

        console.log("All Users:", data);

        setUsers(data);

        setLoading(false);

      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, []);

  // ================= GET SINGLE USER API =================

  const getSingleUser = async (id) => {

    try {

      const res = await fetch(
        `https://fakestoreapi.com/users/${id}`
      );

      const data = await res.json();

      console.log("Single User:", data);

      setSingleUser(data);

    } catch (error) {
      console.log(error);
    }
  };

  // ================= OPEN MODAL =================

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // ================= CLOSE MODAL =================

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  // ================= DELETE USER API =================

  const deleteUser = async () => {

    try {

      const res = await fetch(
        `https://fakestoreapi.com/users/${selectedUser.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      console.log("Deleted API Response:", data);

      // UI SE REMOVE
      const updatedUsers = users.filter(
        (user) => user.id !== selectedUser.id
      );

      setUsers(updatedUsers);

      console.log("Deleted user:", selectedUser);

      closeModal();

    } catch (error) {
      console.log(error);
    }
  };

  // ================= SET EDIT USER =================

  const handleEditClick = (user) => {

    setEditUser({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  };

  // ================= UPDATE USER API =================

  const updateUser = async () => {

    try {

      const updatedData = {
        username: editUser.username,
        email: editUser.email,
      };

      const res = await fetch(
        `https://fakestoreapi.com/users/${editUser.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      console.log("Updated User:", data);

      // UI UPDATE
      const updatedUsers = users.map((user) => {

        if (user.id === editUser.id) {

          return {
            ...user,
            username: editUser.username,
            email: editUser.email,
          };
        }

        return user;
      });

      setUsers(updatedUsers);

      alert("User Updated Successfully");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-page">

      {/* ================= HEADER ================= */}

      <div className="users-header">

        <div>
          <h1>Users</h1>
          <p>Manage all platform users</p>
        </div>

        <Link to="/admin/users/add" className="add-user-btn">
          + Add User
        </Link>

      </div>

      {/* ================= EDIT USER FORM ================= */}

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >

        <h2>Edit User</h2>

        <div
          style={{
            display: "grid",
            gap: "10px",
          }}
        >

          <input
            type="text"
            placeholder="Username"
            value={editUser.username}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                username: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={editUser.email}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                email: e.target.value,
              })
            }
          />

          <button
            onClick={updateUser}
            style={{
              padding: "10px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Update User
          </button>

        </div>

      </div>

      {/* ================= TABLE CARD ================= */}

      <div className="users-table-card">

        {loading ? (

          <h2 style={{ textAlign: "center", padding: "30px" }}>
            Loading...
          </h2>

        ) : (

          <table className="users-table">

            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  {/* USER ID */}
                  <td>#U{user.id}</td>

                  {/* NAME */}
                  <td>
                    {user.name?.firstname}{" "}
                    {user.name?.lastname}
                  </td>

                  {/* EMAIL */}
                  <td>{user.email}</td>

                  {/* USERNAME */}
                  <td>{user.username}</td>

                  {/* STATUS */}
                  <td>
                    <span className="status active">
                      Active
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => getSingleUser(user.id)}
                      style={{
                        padding: "6px 12px",
                        background: "#1e40af",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>

                    {/* EDIT BUTTON */}
                    <button
                      onClick={() => handleEditClick(user)}
                      style={{
                        padding: "6px 12px",
                        background: "#f59e0b",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    {/* DELETE BUTTON */}
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

        )}

      </div>

      {/* ================= SINGLE USER DETAILS ================= */}

      {singleUser && (

        <div
          style={{
            marginTop: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >

          <h2>Single User Details</h2>

          <p>
            <b>ID:</b> {singleUser.id}
          </p>

          <p>
            <b>Name:</b>{" "}
            {singleUser.name?.firstname}{" "}
            {singleUser.name?.lastname}
          </p>

          <p>
            <b>Email:</b> {singleUser.email}
          </p>

          <p>
            <b>Username:</b> {singleUser.username}
          </p>

        </div>

      )}

      {/* ================= DELETE MODAL ================= */}

      {showModal && (

        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Delete User</h2>

            <p>
              Are you sure you want to delete{" "}
              <b>
                {selectedUser?.name?.firstname}{" "}
                {selectedUser?.name?.lastname}
              </b>
              ?
            </p>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="delete-btn"
                onClick={deleteUser}
              >
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