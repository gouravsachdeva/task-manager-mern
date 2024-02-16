import { Request, Response } from "express";
import Task from "../models/Task";

// Get all tasks
export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server Error");
  }
};

// Create a new task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).send("Task Created");
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).send("Server Error");
  }
};

// Delete a task
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(200).send("Task Deleted");
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Server Error");
  }
};

// Toggle done status of a task
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const updatedTask = req.body;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = updatedTask.title || task.title;
    task.description = updatedTask.description || task.description;
    task.done = updatedTask.done !== undefined ? updatedTask.done : task.done;
    await task.save();
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};
