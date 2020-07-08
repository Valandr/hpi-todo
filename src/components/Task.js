import React from 'react';
import Button from './Button';

export default ({task, completeTask, deleteTask}) => {
    const style= { 
      textDecoration: task.isComplete ? 'line-through' : 'none',
      color: task.isComplete ? 'red': 'black'
    }
    return <li>
      <Button task={task} completeTask={completeTask} deleteTask={deleteTask} />
      <span  style={style}>{task.description}</span>
    </li>
  }