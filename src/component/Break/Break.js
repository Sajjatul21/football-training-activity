const Break = ({ handleBreakTime }) => {
    return (
        <div >
            <div className='mb-10'>
                <h1 className='text-xl font-semibold my-6'>Add A Break</h1>

                <div className='height-weight-color flex justify-between p-5 rounded-xl'>
                    <button onClick={handleBreakTime} className='bg-white p-3 rounded-full font-medium'>10m</button>
                    <button onClick={handleBreakTime} className='bg-white p-3 rounded-full font-medium'>20m</button>
                    <button onClick={handleBreakTime} className='bg-white p-3 rounded-full font-medium'>30m</button>
                    <button onClick={handleBreakTime} className='bg-white p-3 rounded-full font-medium'>40m</button>
                </div>

            </div>
        </div >
    );
};

export default Break;