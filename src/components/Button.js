import React from 'react';

export default ({ task, completeTask, deleteTask }) => {
    const handleCompleteClick = () => { completeTask(task) }
    const handleDeleteClick = () => { deleteTask(task) }

return <>
    <button onClick={handleCompleteClick}>Complete</button>
    <button onClick={handleDeleteClick}>Delete</button>
</>
}