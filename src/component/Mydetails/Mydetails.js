import React from 'react';
import "./Mydetails.css";
import photo from "../../img/shihab.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Mydetails = () => {
    return (
        <div>
            <div className='flex items-center mb-10'>
                <div className="avatar">
                    <div className="w-16 rounded-xl">
                        <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl font-bold'>Sajjatul Islam</h1>

                    <p className='text-sm text-slate-400 font-md'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Chandpur, Bangladesh</p>
                </div>
            </div>

            {/* -------------height and weight------------------ */}

            <div className='height-weight-color flex justify-around mt-10 p-4 rounded-xl'>
                <div>
                    <div className='flex items-end'>
                        <h1 className='text-2xl font-bold '>75</h1>
                        <p className='text-slate-400 text-sm'>kg</p>
                    </div>
                    <h1 className='font-font-medium text-slate-500'>Weight</h1>
                </div>
                <div>
                    <h1 className='text-2xl font-bold '>6.5</h1>
                    <h1 className='font-font-medium text-slate-500'>Height</h1>
                </div>
                <div>
                    <div className='flex items-end'>
                        <h1 className='text-2xl font-bold '>25</h1>
                        <p className='text-slate-400 text-sm'>yrs</p>
                    </div>
                    <h1 className='font-font-medium text-slate-500'>Age</h1>
                </div>
            </div>
        </div>
    );
};

export default Mydetails;