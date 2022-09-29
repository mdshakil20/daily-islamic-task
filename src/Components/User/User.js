import React from 'react';

const User = () => {
    return (
        <div>
            <div className='grid lg:grid-col-2 md:grid-col-2 sm:grid-col-1  justify-center text-center mt-3 border mx-auto rounded-lg'>
                <img src={require('./user.png')} alt="" width={60} height={60} className="rounded-full mx-auto" />
                <div className="user_info lg:block md:block hidden sm:hidden ">
                    <p className="name text-xl">Shakil</p>
                    <p className=''>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default User;