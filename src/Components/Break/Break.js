import React from 'react';
// import BreakTimeShow from '../BreakTimeShow/BreakTimeShow';
import { useState, useEffect } from 'react';


const Break = () => {
    let newv = 0;
    const [breakTimeS, setbreaTimeS] = useState(0);

    function handleClick(av) {
        // newv = av;
        // localStorage.setItem('break_time', av);
        // console.log(newv);
    }


    useEffect(() => {
        
        setbreaTimeS(localStorage.getItem('break_time'));
    }, []);


    return (
        <div>
            <div className="add_a_brack my-2 py-4">
                <h2 className='text-2xl'>Add a break</h2>
                <div className='grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-5  my-3 py-2 rounded-lg  bg-green-100 justify-evenly '>
                    <button onClick={() => handleClick(1)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>1m</button>

                    <button onClick={() => handleClick(2)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>2m</button>

                    <button onClick={() => handleClick(3)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>3m</button>

                    <button onClick={() => handleClick(4)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>4m</button>

                    <button onClick={() => handleClick(5)} className='p-2 m-1 rounded-full border-2 border-green-600 bg-white 
                    active:bg-green-400 focus:bg-green-400 '>5m</button>

                </div>
                <div className='bg-green-100 rounded-lg my-2 p-3 flex justify-between '>
                    <p className=''>Break time</p>
                    <span className='text-sky-700 font-bold '>{breakTimeS}</span>
                </div>

            </div>
        </div>

    );
};
export default Break;