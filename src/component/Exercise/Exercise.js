import React from 'react';
import './Exercise.css';
import Swal from 'sweetalert2';
import { deleteDb } from '../utilities/addToDb';

const Exercise = ({ breakTime, practiceTimes }) => {

    const handleSweetAlert = () => {
        Swal.fire(
            'Good job!',
            'You complete your traning!',
            'success'
        );
        deleteDb();
    };
    return (
        <div>
            <h1 className='text-xl font-semibold mb-5'>Exercise Details</h1>
            <div className='height-weight-color flex justify-between p-5 rounded-xl text-base font-medium'>
                <h1>Practice time</h1>
                <h1 className='text-slate-400'>{practiceTimes} minute</h1>
            </div>
            <div className='height-weight-color flex justify-between p-5 rounded-xl text-base font-medium mt-5 mb-10'>
                <h1>Break time</h1>
                <h1 className='text-slate-400'>{breakTime ? breakTime : 0} minute</h1>
            </div>
            <div className='  flex justify-center mt-10'>
                <button onClick={handleSweetAlert} className='btn bg-cyan-600 px-12'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Exercise;