import mongoose, { Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  done: boolean;
}

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
