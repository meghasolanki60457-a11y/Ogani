import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful");
    console.log(formData);
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(135deg, #141E30 0%, #243B55 50%, #4CA1AF 100%)",
      }}
    >
      <div
        className="row shadow-lg overflow-hidden rounded-4"
        style={{
          width: "950px",
          background: "#fff",
        }}
      >
        {/* Left Side */}
        <div
          className="col-md-5 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
          style={{
            background:
              "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <h1 className="fw-bold mb-3">Welcome Back!</h1>

          <p className="text-center">
            Create your account and enjoy our modern dashboard experience.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="signup"
            width="180"
            className="mt-3"
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-7 p-5">
          <h2 className="fw-bold text-center mb-4 text-primary">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control rounded-3"
                placeholder="Enter Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Row */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Gender
              </label>

              <select
                className="form-select rounded-3"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Address</label>

              <textarea
                className="form-control rounded-3"
                rows="3"
                placeholder="Enter Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Pincode */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Pincode / ZIP Code
              </label>

              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

            {/* Terms */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />

              <label className="form-check-label">
                I agree to Terms & Conditions
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn w-100 text-white fw-bold rounded-3"
              style={{
                background:
                  "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                padding: "12px",
                border: "none",
              }}
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;