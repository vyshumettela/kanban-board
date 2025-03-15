import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask } from '../redux/tasksSlice';
import SearchBar from './SearchBar';
import '../styles/KanbanBoard.css';
const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(
      moveTask({
        source: source.droppableId,
        destination: destination.droppableId,
        taskId: result.draggableId,
      })
    );
  };

  const filterTasks = (tasks, query) => {
    if (!query) return tasks;
    const filteredTasks = {};
    Object.keys(tasks).forEach((column) => {
      filteredTasks[column] = tasks[column].filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      );
    });
    return filteredTasks;
  };
  
  const filteredTasks = filterTasks(tasks, searchQuery);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {Object.keys(filteredTasks).map((column) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ width: '22%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}}
                >
                   <h2 style={{ color: '#1976D2', marginBottom: '10px' }}>{column}</h2>
                  {filteredTasks[column].map((task, index) => (
                    <TaskCard key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;