import React from 'react';

const User = () => {
    return (
        <div>
            <div className='flex mt-3 border p-2 rounded-lg'>
                <img src={require('./user.png')} alt="" width={60} height={60} className="rounded-full" />
                <div className="user_info pl-5">
                    <p className="name text-xl">Shakil</p>
                    <p className=''>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default User;