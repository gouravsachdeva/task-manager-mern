import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (newTask: { title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
