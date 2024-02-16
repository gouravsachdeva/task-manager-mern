import React from "react";
import { Task } from "../models/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  toggleDone: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleDone,
}) => {
  const undoneTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const sortedDoneTasks = doneTasks.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const sortedTasks = [...undoneTasks, ...sortedDoneTasks];

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
