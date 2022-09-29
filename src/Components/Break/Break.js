import React from 'react';

const Break = () => {
    function handleClick(av) {
        localStorage.setItem('break_time', av);
      }

    return (
        <div className="add_a_brack my-12 py-4">
            <h2 className='text-2xl'>Add a break</h2>
            <div className='flex my-3 py-2 rounded-lg  bg-green-100 justify-evenly '>
                <button onClick={()=>handleClick(1)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>1m</button>

                <button onClick={()=>handleClick(2)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>2m</button>

                <button onClick={()=>handleClick(3)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>3m</button>

                <button onClick={()=>handleClick(4)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>4m</button>

                <button onClick={()=>handleClick(5)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>5m</button>
                
            </div>
        </div>
    );
};

export default Break;