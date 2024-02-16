import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { API_URL } from "./constants/constants";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addTask = (newTask) => {
    axios
      .post(`${API_URL}/api/tasks`, newTask)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
