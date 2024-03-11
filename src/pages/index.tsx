import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slice/appSlice';
import { Tasklist } from '../components/Tasklist';
import Link from 'next/link';

const AddTask: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        
        dispatch(addTask(name));
        setName('');
    };

    return (
        <div style={{ 
            backgroundColor: '#f0f0f0',
            padding:'12',
            fontSize: '20px',
            textDecoration: 'none',
            color: 'black'
            
        }}>
            <Link style={{border: '3px solid yellow'}} href='/taskdetails'>taskdetails</Link>
            <div style={{
                
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
            }}>
                <div style={{
                    marginBottom: 20,   
                    padding: 20}}>
                
                    <input
                        name='name'
                        onChange={handleChange}
                        placeholder='Enter New Task'
                        value={name}
                        style={{ backgroundColor: '#f0f0f0', marginBottom: '10px', padding: '5px' }}
                    />
                    <button onClick={handleSubmit}>Add Task</button>
                    <Tasklist />
                    
                </div>
            </div>
        </div>       
    );
};

export default AddTask;
