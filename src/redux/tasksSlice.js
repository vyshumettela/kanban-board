import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: {
      todo: [],
      inProgress: [],
      peerReview: [],
      done: [],
    },
    searchQuery: '',
  },
  reducers: {
    addTask: (state, action) => {
      const { column, task } = action.payload;
      state.tasks[column].push(task);
    },
    moveTask: (state, action) => {
      const { source, destination, taskId } = action.payload;
      const task = state.tasks[source].find((t) => t.id === taskId);
      state.tasks[source] = state.tasks[source].filter((t) => t.id !== taskId);
      state.tasks[destination].push(task);
    },
    searchTask: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, moveTask, searchTask } = tasksSlice.actions; // Export searchTask
export default tasksSlice.reducer;