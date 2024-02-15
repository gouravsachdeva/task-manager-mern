import * as mongoose from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
}

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
