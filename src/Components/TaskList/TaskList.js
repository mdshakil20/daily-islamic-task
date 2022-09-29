import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import TimeCalculate from '../TimeCalculate/TimeCalculate';
import User from '../User/User';
import './TaskList.css'

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [timeArr, setTime] = useState([]);

    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);


    const addTime = (task) => {
        const newTime = [...timeArr, task];
        setTime(newTime);
    };

    return (
        <div className='app_container flex'>
            <div className="tasks_container bg-green-50	 w-3/4 p-16">
                <h1 className='text-2xl'>Daily Islamic Task</h1>
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                    {
                        tasks.map(task =>
                            <Task key={task.id} task={task} addBtn={addTime}></Task>
                        )
                    }
                </div>
            </div>
            <div className='w-1/4 p-5 h-screen sticky top-0'>
                <User></User>
                <div className="add_a_brack my-12 py-4">
                    <h2 className='text-2xl'>Add a break</h2>
                    <div className='flex my-3 py-2 rounded-lg  bg-green-100 justify-evenly '>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>1</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>2</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>3</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>4</span>m</button>
                        <button className='p-2 m-1 rounded-full  bg-green-400 '><span className='time_value'>5</span>m</button>
                    </div>
                </div>
                <TimeCalculate arr={timeArr}></TimeCalculate>
                <button className='w-full p-3 font-bold bg-green-400 rounded-lg '>Activity Completed</button>
            </div>
        </div>

    );
};

export default TaskList;