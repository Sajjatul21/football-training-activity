import React from 'react';
import './Exercise.css';
const Exercise = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold mb-5'>Exercise Details</h1>
            <div className='height-weight-color flex justify-between p-5 rounded-xl text-base font-medium'>
                <h1>Exercise time</h1>
                <h1 className='text-slate-400'>0 minute</h1>
            </div>
            <div className='height-weight-color flex justify-between p-5 rounded-xl text-base font-medium mt-5 mb-10'>
                <h1>Break time</h1>
                <h1 className='text-slate-400'>0 minute</h1>
            </div>
            <div className=' btn bg-cyan-600 px-10 flex justify-center mt-10'>
                <button >Activity Completed</button>
            </div>
        </div>
    );
};

export default Exercise;