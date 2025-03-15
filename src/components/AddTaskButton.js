import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import '../styles/AddTaskButton.css';
const AddTaskButton = () => {
  const [open, setOpen] = useState(false); // State to manage dialog visibility
  const [title, setTitle] = useState(''); // State for task title
  const [description, setDescription] = useState(''); // State for task description
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const handleSubmit = () => {
    // Dispatch the addTask action
    dispatch(
      addTask({
        column: 'todo', // Add the task to the "To Do" column
        task: { id: Date.now().toString(), title, description }, // Create a new task
      })
    );
    setOpen(false); // Close the dialog
    setTitle(''); // Reset title
    setDescription(''); // Reset description
  };

  return (
    <>
      {/* Button to open the dialog */}
      <Button variant="contained" onClick={() => setOpen(true)} style={{ margin: '20px' }}>
        Add Task
      </Button>

      {/* Dialog for adding a new task */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddTaskButton;