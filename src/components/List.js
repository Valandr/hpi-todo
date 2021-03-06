import React, { useState, useEffect } from 'react';
import useFetch from "./useFetch";
import Task from './Task';
import NewTask from './NewTask';
import styled from 'styled-components';

export default () => {

    const tasksApi = useFetch(
        "https://5efb52e180d8170016f7639f.mockapi.io/tasks"
    );

    useEffect(() => {
        const init = async () => {
            tasksApi.get().then(data => setList(data))
        }
        init()
    })


    const [list, setList] = useState([])
    const [newTask, setNewTask] = useState('');
    const [loading, setLoading] = useState(false);

    const addTask = () => {
        if (!newTask) return;
        setLoading(true);
        tasksApi
        .post({
            description: newTask,
            createdAt: new Date().toISOString(),
            isComplete: false
        })
        .then(data => {
            const newList = [...list, data].sort((a, b) =>
                a.createdAt < b.createdAt ? 1 : -1
            );
            setList(newList);
            setNewTask("");
            setLoading(false);
        });
    };

    const deleteTask = task => {
        const { id } = task;
        setLoading(true);
        tasksApi.del(id).then(data => {
            const newList = list
                .filter(l => l.id !== data.id)
                .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
            setList(newList);
            setLoading(false);
        })
    }
    
    const completeTask = task => {
        const { id, isComplete } = task;
        setLoading(true);
        tasksApi.put(id, { isComplete: !isComplete, updatedAt: new Date().toISOString() })
        .then(data => {
            const newList = list
                .map(l => {
                    if (l.id === id) {
                        l.isComplete = data.isComplete;
                        l.updatedAt = data.updatedAt;
                    }
                    return l;
                })
                .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
            setList(newList);
            setNewTask("");
            setLoading(false);
        });
    };

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    font-size: 45px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    `;

    const ListStyle = styled.div`
      display: flex;
      justify-content: center;
    `

    const Ul = styled.ul`
    list-style: none;
    `

    return (
        <div>
            <Title>Tasks</Title>
            <hr />
            {loading && <h2>Loading ... </h2>}
            {!loading && <div>

                <div>
                    <NewTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
                </div>
                <ListStyle>
                    <Ul >
                        {list
                            .map
                            (task =>
                                <Task
                                    key={task.id}
                                    task={task}
                                    completeTask={completeTask}
                                    deleteTask={deleteTask}
                                />
                            )
                        }
                    </Ul>
                </ListStyle>
            </div>
            }
        </div>
    )
}