import React from "react";

const TaskItem = ({ task, deleteTask, toggleDone }) => {
  const taskStyle = {
    textDecoration: task.done ? "line-through" : "none",
    color: task.done ? "#ccc" : "inherit",
  };
  return (
    <div className="task__item" style={taskStyle}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => alert("Edit task")}>Edit</button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={() => toggleDone(task._id)}>
        {task.done ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default TaskItem;
