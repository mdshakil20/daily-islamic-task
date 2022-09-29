import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
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
            <div className='w-1/4'>
                <p>this is a demo text</p>
            </div>
        </div>

    );
};

export default TaskList;