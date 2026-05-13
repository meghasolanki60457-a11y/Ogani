import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // demo login (real me API hoti hai)
    if (email && password) {
      localStorage.setItem("token", "12345");

      navigate("/admin");
    } else {
      alert("Please fill all fields");
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

export default Login;