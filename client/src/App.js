import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTasks from "./utilities/hooks/useTasks";
import "./App.css";

const App = () => {
  const { tasks, loading, addTask, deleteTask, toggleDone } = useTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      )}
    </div>
  );
};

export default App;
