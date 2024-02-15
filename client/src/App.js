import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('/api/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    }, []);

    const addTask = () => {
        axios.post('/api/tasks', { title, description })
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    const deleteTask = (taskId) => {
        axios.delete(`/api/tasks/${taskId}`)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Task Manager</h1>
    <div>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
    <button onClick={addTask}>Add Task</button>
    </div>
    <div>
    {tasks.map(task => (
            <div key={task._id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => alert('Edit task')}>Edit</button>
    <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
))}
    </div>
    </div>
);
};

export default App;
