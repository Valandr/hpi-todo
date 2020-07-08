import React from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default ({ task, completeTask, deleteTask }) => {
    const handleCompleteClick = () => { completeTask(task) }
    const handleDeleteClick = () => { deleteTask(task) }
    const { push: navigate } = useHistory();
    const notifyComplete = () =>
        toast.info("Task completed !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false
        });

    const notifyDelete = () =>
        toast.warn("Task deleted !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false
        });
    return <>
        <button onClick={() => {
            handleCompleteClick();
            navigate("/");
            notifyComplete();
        }}
        > Complete</button>
        <button onClick={() => {
            handleDeleteClick();
            notifyDelete();
        }}>Delete</button>

    </>
}