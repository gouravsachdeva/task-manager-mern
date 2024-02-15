const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./client/src/Task');

const app = express();
const PORT =  5001;
const MONGODB_URI = 'mongodb://localhost:27017/task-manager';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/tasks', async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        await newTask.save();
        res.status(201).send('Task Created');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/tasks/:taskId', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.taskId);
        res.status(200).send('Task Deleted');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
