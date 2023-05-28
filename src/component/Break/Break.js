import React from 'react';

const Break = () => {
    return (
        <div >
            <h1 className='text-xl font-semibold my-6'>Add A Break</h1>

            <div className='height-weight-color flex justify-between p-5 rounded-xl'>
                <button className='bg-white p-3 rounded-full'>10s</button>
                <button className='bg-white p-3 rounded-full'>20s</button>
                <button className='bg-white p-3 rounded-full'>30s</button>
                <button className='bg-white p-3 rounded-full'>40s</button>
            </div>
        </div >
    );
};

export default Break;