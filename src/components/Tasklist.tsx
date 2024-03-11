import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../slice/store';
import { deleteTask, completeTask } from '../slice/appSlice'; 

export const Tasklist = () => {
    const { taskList } = useSelector((state: RootState) => state.appReducer);
    const dispatch = useDispatch();

    const handleDeleteTask = (index: number) => {
        dispatch(deleteTask(index));
    };
    
    const handleCompleteTask = (index: number) => {
        dispatch(completeTask(index)); 
    };

    return (
        <div style={{ border: '2px solid yellow', padding: 20 }}>
            {taskList.map((task, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px', textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'limegreen' : 'inherit' }}>{task.name}</div>
                    <div className='p-3'>
                    <button onClick={() => handleCompleteTask(index)}>Complete</button>
                    </div>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                   
                </div>
            ))}
        </div>
    );
};
