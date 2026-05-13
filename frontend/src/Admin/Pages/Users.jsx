
import { Link } from "react-router-dom";
const Users = () => {

  const users = [
    {
      id: "#U1001",
      name: "Aarav Sharma",
      email: "aarav@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: "#U1002",
      name: "Priya Verma",
      email: "priya@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "#U1003",
      name: "Rahul Singh",
      email: "rahul@example.com",
      role: "Customer",
      status: "Blocked",
    },
    {
      id: "#U1004",
      name: "Sneha Patel",
      email: "sneha@example.com",
      role: "Vendor",
      status: "Active",
    },
  ];

  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="users-header">

        <div>
          <h1>Users</h1>
          <p>Manage all platform users</p>
        </div>

       <Link
  to="/admin/users/add"
  className="add-user-btn"
>
  + Add User
</Link>

      </div>

      {/* STATS */}
      <div className="users-stats">

        <div className="user-stat-card">
          <h3>Total Users</h3>
          <h2>1,250</h2>
        </div>

        <div className="user-stat-card">
          <h3>Admins</h3>
          <h2>12</h2>
        </div>

        <div className="user-stat-card">
          <h3>Customers</h3>
          <h2>1,180</h2>
        </div>

        <div className="user-stat-card">
          <h3>Blocked</h3>
          <h2>58</h2>
        </div>

      </div>

      {/* TABLE CARD */}
      <div className="users-table-card">

        <div className="table-header">
          <h2>Users List</h2>
        </div>

        <table className="users-table">

          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
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
                  <span
                    className={
                      user.status === "Active"
                        ? "status active"
                        : "status blocked"
                    }
                  >
                    {user.status}
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

export default Users;