import React from 'react';
import './Header.css';
import logo from "../../img/logo.png";
const Header = () => {
    return (
        <div>
            <div className="ml-28 mt-20">
                <div className='flex items-center '>
                    <img src={logo} alt="" />
                    <h1 className='text-4xl font-bold text-cyan-600'>Football Training Activity</h1>
                </div>
                <h2 className='text-2xl font-semibold mt-5 mb-10 ml-3'>Select today’s traning</h2>
            </div>


            <div>

            </div>
        </div>
    );
};

export default Header;