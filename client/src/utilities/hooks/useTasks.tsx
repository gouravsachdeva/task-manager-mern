import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { Task } from "../../models/Task";

interface NewTask {
  title: string;
  description: string;
}

interface UseTasks {
  tasks: Task[];
  loading: boolean;
  addTask: (newTask: NewTask) => void;
  deleteTask: (taskId: string) => void;
  toggleDone: (taskId: string) => void;
}

const useTasks = (): UseTasks => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<Task[]>(`${API_URL}/api/tasks`)
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const addTask = (newTask: NewTask): void => {
    axios
      .post(`${API_URL}/api/tasks`, newTask)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const deleteTask = (taskId: string): void => {
    axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const toggleDone = (taskId: string): void => {
    const taskToUpdate = tasks.find((task) => task._id === taskId);
    if (!taskToUpdate) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }
    const updatedTask = { ...taskToUpdate, done: !taskToUpdate.done };

    axios
      .put(`${API_URL}/api/tasks/${taskId}`, updatedTask)
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
      })
      .catch((err) => console.error("Error toggling task done status:", err));
  };

  return { tasks, loading, addTask, deleteTask, toggleDone };
};

export default useTasks;
