import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleDone }) => {
  const sortedTasks = tasks.sort((a, b) =>
    a.done === b.done ? 0 : a.done ? 1 : -1
  );

  return (
    <div>
      {sortedTasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
