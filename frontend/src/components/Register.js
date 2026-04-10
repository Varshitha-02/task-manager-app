import { useState } from "react";
import axios from "axios";

function Register({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:5000/api/auth/register",
        { name, email, password }
      );

      alert("Registered Successfully ✅");
      setPage("login");

    } catch (err) {
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>📝 Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <p
        onClick={() => setPage("login")}
        style={{ cursor: "pointer", color: "blue" }}
      >
        Already have account? Login
      </p>
    </div>
  );
}

export default Register;