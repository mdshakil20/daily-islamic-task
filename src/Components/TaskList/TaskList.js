import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import User from '../User/User';
import './TaskList.css'

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className='app_container flex'>
            <div className="tasks_container bg-green-50	 w-3/4 p-16">
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                    {
                        tasks.map(task =>
                            <Task key={task.id} task={task}></Task>
                        )
                    }
                </div>
            </div>
            <div className='w-1/4 p-5 '>
                <User></User>
                <div className="add_a_brack my-12 py-12">
                    <h2 className='text-2xl'>Add a brack</h2>
                    <div className='flex my-3 py-2 bg-green-100 justify-evenly '>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>1</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>2</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>3</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>4</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>5</span>m</button>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default TaskList;