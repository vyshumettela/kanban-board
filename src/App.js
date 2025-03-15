import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { searchTask } from './redux/tasksSlice'; // Import searchTask
import KanbanBoard from './components/KanbanBoard';
import AddTaskButton from './components/AddTaskButton'; // Import AddTaskButton
import './styles/global.css'; // Import the CSS file
const App = () => {
  const dispatch = useDispatch(); // Define dispatch

  const handleSearch = (query) => {
    dispatch(searchTask(query)); // Use dispatch to send the searchTask action
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <AddTaskButton/>
      <KanbanBoard />
    </div>
  );
};

export default App;