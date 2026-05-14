import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {

  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    pincode: "",
    terms: false,
  });

  // ✅ INLINE ERRORS STATE
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // remove error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!formData.id) newErrors.id = "ID is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch(
        "https://fakestoreapi.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formData.id,
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      alert("Registration Successful");

      localStorage.setItem("token", data.id);

      setFormData({
        id: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        gender: "",
        address: "",
        pincode: "",
        terms: false,
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "100%", maxWidth: "650px" }}
      >

        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Create Account</h2>
          <p className="text-muted">Join us and start shopping</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="row">

            {/* ID */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">ID</label>
              <input
                type="number"
                className="form-control rounded-3"
                placeholder="Enter ID"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              {errors.id && <small className="text-danger">{errors.id}</small>}
            </div>

            {/* Username */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>

          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold py-2 rounded-3"
            style={{
              background: "#5b6dfa",
              border: "none",
            }}
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;