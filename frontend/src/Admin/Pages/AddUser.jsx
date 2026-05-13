import { useNavigate } from "react-router-dom";


const CreateUser = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // yaha API call lagegi later
    alert("User Created Successfully");

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
              <input type="text" placeholder="Enter full name" required />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" />
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" required />
            </div>

            {/* ROLE */}
            <div className="form-group">
              <label>Role</label>
              <select required>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            {/* STATUS */}
            <div className="form-group">
              <label>Status</label>
              <select>
                <option>Active</option>
                <option>Blocked</option>
              </select>
            </div>

            {/* ADDRESS */}
            <div className="form-group full">
              <label>Address</label>
              <textarea placeholder="Enter full address"></textarea>
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