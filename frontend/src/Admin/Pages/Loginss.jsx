import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginss = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    const adminEmail = "admin@gmail.com";
    const adminPassword = "123456";

    if (
      email === adminEmail &&
      password === adminPassword
    ) {

      localStorage.setItem("adminToken", "true");

      navigate("/admin/dashboard");

    } else {
      alert("Invalid Email or Password");
    }

  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
};

export default Loginss;