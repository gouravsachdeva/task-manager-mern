import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/constants';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tasks`)
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

  return { tasks, loading, addTask, deleteTask };
};

export default useTasks;
