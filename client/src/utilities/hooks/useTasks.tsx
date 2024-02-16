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
    axios
      .put(`${API_URL}/api/tasks/${taskId}/toggleDone`)
      .then(() => {
        setTasks((prevTasks) => {
          return prevTasks.map((task) => {
            if (task._id === taskId) {
              return { ...task, done: !task.done };
            }
            return task;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  return { tasks, loading, addTask, deleteTask, toggleDone };
};

export default useTasks;
