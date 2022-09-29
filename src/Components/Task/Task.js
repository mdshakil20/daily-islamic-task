import React from 'react';

const Task = (props) => {
    const { img, name, details, time } = props.task;
    return (
        <div className='bg-white rounded-lg '>
            <img src={img} alt="" className='mt-4 mx-auto ' />
            <div className="info p-5 ">
                <p className='font-bold 2xl my-3  '>{name}</p>
                <p className='text-justify	'>{details}</p>
                <p className='mt-3'>Time: <b> {time} m</b></p>
            </div>
            <button className='w-full my-5 py-2 bg-green-400 rounded-lg ' 
                onClick={() => props.addBtn(props.task)}>Add to list</button>
        </div>
    );
};

export default Task;