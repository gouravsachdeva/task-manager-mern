import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => alert('Edit task')}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
