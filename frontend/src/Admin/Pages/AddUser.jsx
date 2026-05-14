import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const navigate = useNavigate();

  // ================= USER STATE =================

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    status: "Active",
    address: "",
  });

  // ================= GET SINGLE USER API =================

  useEffect(() => {

    fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((data) => {

        console.log("Single User Data:", data);

        // API DATA FORM ME SET
        setUser({
          fullname: `${data.name.firstname} ${data.name.lastname}`,
          email: data.email,
          phone: data.phone,
          password: data.password,
          role: "customer",
          status: "Active",
          address: `${data.address.number}, ${data.address.street}, ${data.address.city}`,
        });

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Form Data:", user);

    alert("User Loaded Successfully");

    navigate("/admin/users");
  };

  return (
    <div className="create-user-page">

      {/* HEADER */}
      <div className="page-header">

        <div>
          <h2>Create New User</h2>
          <p>Add new user to your platform</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/admin/users")}
        >
          ← Back
        </button>

      </div>

      {/* FORM CARD */}
      <div className="form-card">

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* FULL NAME */}
            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullname"
                placeholder="Enter full name"
                value={user.fullname}
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* PHONE */}
            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={user.phone}
                onChange={handleChange}
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleChange}
                required
              />

            </div>

            {/* ROLE */}
            <div className="form-group">

              <label>Role</label>

              <select
                name="role"
                value={user.role}
                onChange={handleChange}
                required
              >

                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>

              </select>

            </div>

            {/* STATUS */}
            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={user.status}
                onChange={handleChange}
              >

                <option>Active</option>
                <option>Blocked</option>

              </select>

            </div>

            {/* ADDRESS */}
            <div className="form-group full">

              <label>Address</label>

              <textarea
                name="address"
                placeholder="Enter full address"
                value={user.address}
                onChange={handleChange}
              ></textarea>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="btn-group">

            <button type="submit" className="submit-btn">
              Create User
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/admin/users")}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateUser;