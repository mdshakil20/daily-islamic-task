import React, { useEffect, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Break from '../Break/Break';
import Task from '../Task/Task';
import TimeCalculate from '../TimeCalculate/TimeCalculate';
import User from '../User/User';
import './TaskList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const notify = () => toast("Congratulation for completing the tasks.");

    return (
        <div>
            <div className='app_container flex'>
                <div className="tasks_container bg-green-50	 w-3/4 p-16">
                    <div className='flex'>
                        <img src={require('../../img/islamic.jpg')} alt="" width={40} height={40} />
                        <h1 className=' ml-2 text-2xl'>Daily Islamic Task</h1>
                    </div>

                    <p>Select items:</p>
                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                        {
                            tasks.map(task =>
                                <Task key={task.id} task={task} addBtn={addTime}></Task>
                            )
                        }
                    </div>
                    <Accordion></Accordion>
                </div>
                <div className='w-1/4 p-5 h-screen sticky top-0'>
                    <User></User>
                    <Break></Break>
                    <TimeCalculate arr={timeArr}></TimeCalculate>
                    <button  onClick={notify} className='w-full p-4 text-xs lg:text-base mb-5 font-bold bg-green-400 rounded-lg '>Activity Completed</button>
                    <ToastContainer position="top-center" />
                </div>
            </div>
        </div>


    );
};

export default TaskList;