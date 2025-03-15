import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/TaskCard.css'; // Import the CSS file
const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
         <Card className="task-card">
            <CardContent>
              <Typography className="task-title">{task.title}</Typography>
              <Typography className="task-description">{task.description}</Typography>
            </CardContent>
          </Card>  
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;