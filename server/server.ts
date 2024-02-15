import express from "express";
import bodyParser from "body-parser";
import connectDB from "./configs/connection";
import {
  getAllTasks,
  createTask,
  deleteTask,
} from "./controllers/taskController";

// Connect to MongoDB
connectDB();

const app = express();
const PORT: number = 5001;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/api/tasks", getAllTasks);
app.post("/api/tasks", createTask);
app.delete("/api/tasks/:taskId", deleteTask);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));