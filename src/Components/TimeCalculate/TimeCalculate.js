import React, { useEffect, useState } from 'react';

const TimeCalculate = (props) => {
    const arr = props.arr;

    const [breakTimeS, setbreaTimeS] = useState(0);
    useEffect(()=>{
        let breakTime = localStorage.getItem('break_time'); 
        setbreaTimeS(breakTime);
    },[]);

    let updateTime = 0;
    for (const taskTime of arr) {
        updateTime = updateTime + taskTime.time;
    }

    
    return (
        <div className="task_time_details my-12">
            <h2 className='text-2xl'>Tasks Details</h2>
            <div className='bg-green-100 rounded-lg my-3 p-3 flex justify-between '>
                <p className=''>Task time</p>
                <span className='text-sky-700 font-bold '>{ updateTime} m</span>
            </div>
            <div className='bg-green-100 rounded-lg my-3 p-3 flex justify-between '>
                <p className=''>Break time</p>
                <span className='text-sky-700 font-bold '>{breakTimeS}</span>
            </div>
        </div>
    );
};

export default TimeCalculate;