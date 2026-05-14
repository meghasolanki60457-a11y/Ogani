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

  // Handle Input
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

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

      console.log("API Response:", data);

      // Success Alert
      alert("Registration Successful");

      // ✅ IMPORTANT FIX (HEADER LOGIN/LOGIC)
      localStorage.setItem("token", data.id);

      // Reset Form
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

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-7">

          <div className="card shadow p-4 border-0 rounded-4">

            <h2 className="text-center mb-4 fw-bold">
              Create Account
            </h2>

            <form onSubmit={handleSubmit}>

              {/* ID */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  ID
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter ID"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Username */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Username
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Email */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Hidden Mobile */}
              <div className="mb-3 d-none">

                <label className="form-label">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

              </div>

              {/* Password */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Hidden Confirm Password */}
              <div className="mb-3 d-none">

                <label className="form-label">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

              </div>

              {/* Hidden Gender */}
              <div className="mb-3 d-none">

                <label className="form-label">
                  Gender
                </label>

                <select
                  className="form-select"
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

              {/* Hidden Address */}
              <div className="mb-3 d-none">

                <label className="form-label">
                  Address
                </label>

                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>

              </div>

              {/* Hidden Pincode */}
              <div className="mb-3 d-none">

                <label className="form-label">
                  Pincode / ZIP Code
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />

              </div>

              {/* Hidden Terms */}
              <div className="form-check mb-4 d-none">

                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />

                <label className="form-check-label">
                  I agree to Terms & Conditions
                </label>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
              >
                Register
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;