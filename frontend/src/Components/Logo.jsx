import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {

  // NAVIGATE
  const navigate = useNavigate();

  // STATE
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      console.log("API Response:", data);

      // SUCCESS LOGIN
      if (data.token) {

        // SAVE TOKEN
        localStorage.setItem("token", data.token);

        // SAVE LOGIN STATUS
        localStorage.setItem("isLogin", true);

        alert("Login Successful");

        // REDIRECT HOME PAGE
        navigate("/");

        // RELOAD PAGE
        window.location.reload();

      } else {

        alert("Invalid Username or Password");
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (

    <div className="container min-vh-100 d-flex justify-content-center align-items-center">

      <div className="row justify-content-center w-100">

        {/* LOGIN FORM */}
        <div className="col-md-5">

          <div className="card shadow border-0 p-4 rounded-4">

            <div className="text-center mb-4">

              <h2 className="fw-bold">
                Login
              </h2>

              <p className="text-muted">
                Enter your details to continue
              </p>

            </div>

            {/* FORM */}
            <form onSubmit={handleLogin}>

              {/* USERNAME */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Username
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* PASSWORD */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* FORGOT PASSWORD */}
              <div className="text-end mb-4">

                <Link
                  to="/"
                  className="text-decoration-none"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="btn btn-primary w-100 mb-4"
              >
                Login
              </button>

              {/* SIGNUP */}
              <div className="text-center">

                <span className="text-muted">
                  Don’t have an account?
                </span>

                <Link
                  to="/ogani/sign-in"
                  className="btn btn-outline-primary ms-2"
                >
                  Sign Up
                </Link>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;