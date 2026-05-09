import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
      }}
    >
      <div
        className="row shadow-lg rounded-4 overflow-hidden"
        style={{
          width: "900px",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Side */}
        <div
          className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
          style={{
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <h1 className="fw-bold mb-3">Welcome Back</h1>

          <p className="text-center">
            Login to continue and explore the beautiful UI experience.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="login"
            width="200"
            className="mt-4"
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6 p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Login</h2>

            <p className="text-muted">
              Enter your details to continue
            </p>
          </div>

          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-end mb-4">
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "#764ba2" }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="btn w-100 text-white fw-bold rounded-3 mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                padding: "12px",
              }}
            >
              Login
            </button>

            {/* Sign Up */}
            <div className="text-center">
              <span className="text-muted">
                Don’t have an account?
              </span>

              <Link
                to="/ogani/sign-in"
                className="btn btn-outline-primary rounded-pill ms-2 px-4"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;