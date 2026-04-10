import { useState } from "react";
import axios from "axios";

function Login({ setPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
      setPage("tasks");

    } catch (err) {
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p
        onClick={() => setPage("register")}
        style={{ cursor: "pointer", color: "blue" }}
      >
        New user? Register
      </p>
    </div>
  );
}

export default Login;