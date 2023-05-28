import React from 'react';
import logo from "../../img/logo.png";
const Header = () => {
    return (
        <div>
            <div>
                <div className='flex items-center '>
                    <img src={logo} alt="" />
                    <h1 className='text-4xl font-bold text-cyan-600'>Football Training Activity</h1>
                </div>
                <h2 className='text-2xl font-semibold mt-3'>Select today’s exercise</h2>
            </div>
        </div>
    );
};

export default Header;