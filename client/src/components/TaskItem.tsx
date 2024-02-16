import React from "react";
import { Task } from "../models/Task";

interface TaskItemProps {
  task: Task;
  deleteTask: (taskId: string) => void;
  toggleDone: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  deleteTask,
  toggleDone,
}) => {
  const taskStyle: React.CSSProperties = {
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
