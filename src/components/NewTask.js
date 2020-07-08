import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const New = styled.div`
display: flex;
justify-content: center;
`


toast.configure()

export default ({ newTask, setNewTask, addTask }) => {
    const handleChange = event => setNewTask(event.target.value);
    const notifyNew = () =>
        toast.info("Adding task !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 9000
        });
    return <div id="container">
        <New>
            <input type='text' value={newTask} onChange={handleChange} placeholder='Create new task' />
            <button onClick={() => {
                notifyNew(); addTask()
            }} disabled={!newTask}>Create</button>
        </New>
    </div>
}