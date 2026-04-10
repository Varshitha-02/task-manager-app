import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskPage from "./components/TaskPage";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "tasks" && <TaskPage setPage={setPage} />}
    </>
  );
}

export default App;