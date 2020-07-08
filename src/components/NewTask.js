import React from 'react'

export default ({ newTask, setNewTask, addTask }) => {
    const handleChange = event => setNewTask(event.target.value);
   
      return <div id="container">
      <input type='text' value={newTask} onChange={handleChange} placeholder='Create new task' />
      <button onClick={ addTask} disabled={!newTask}>Create</button>
  </div>
}