import { Request, Response } from 'express';
import Task from '../models/Task';

// Get all tasks
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).send('Server Error');
    }
};

// Create a new task
export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).send('Task Created');
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).send('Server Error');
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { taskId } = req.params;
        await Task.findByIdAndDelete(taskId);
        res.status(200).send('Task Deleted');
    } catch (err) {
        console.error('Error deleting task:', err);
        res.status(500).send('Server Error');
    }
};