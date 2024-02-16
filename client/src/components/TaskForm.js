import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default TaskForm;
