import { useState, useEffect } from "react";
import axios from "axios";

function TaskPage({ setPage }) {

  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const API = "http://127.0.0.1:5000/api/tasks";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first 🔐");
      setPage("login");
    } else {
      fetchTasks();
    }
  }, [setPage]);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return;
    await axios.post(API, { title });
    setTitle("");
    fetchTasks();
  };

  const completeTask = async (id) => {
    await axios.put(`${API}/${id}`, { status: "Completed" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  return (
    <div className="container">

      <button onClick={logout}>🚪 Logout</button>

      <h2>✨ Task Manager</h2>

      <h3>Total Tasks: {tasks.length}</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task..."
      />

      <button onClick={addTask}>➕ Add Task</button>

      {tasks.map((t) => (
        <div className="task" key={t._id}>
          <h4>{t.title}</h4>
          <p>Status: {t.status}</p>

          <button onClick={() => completeTask(t._id)}>
            ✅ Complete
          </button>

          <button onClick={() => deleteTask(t._id)}>
            ❌ Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default TaskPage;