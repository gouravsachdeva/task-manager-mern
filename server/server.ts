import express from "express";
import bodyParser from "body-parser";
import connectDB from "./configs/connection";
import cors from "cors";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./controllers/taskController";

// Connect to MongoDB
connectDB();

const app = express();
const PORT: number = 5001;

// Middleware
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

// Routes
app.get("/api/tasks", getAllTasks);
app.post("/api/tasks", createTask);
app.delete("/api/tasks/:taskId", deleteTask);
app.put("/api/tasks/:taskId/toggleDone", updateTask);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
