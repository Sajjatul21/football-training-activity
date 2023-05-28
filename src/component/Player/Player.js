import React from 'react';
import './Player.css';
const Player = ({ player }) => {
    const { picture, age, name, time, about } = player;
    // console.log(player);
    return (
        <div>
            <div className="player-cart card w-full bg-base-100 shadow-xl ">
                <figure><img className='w-full h-52' src={picture} alt="Shoes" /></figure>
                <div className="p-4  ">
                    <h2 className="card-title pb-3">{name}</h2>
                    <p className='pb-2'>{about.length < 30 ? about : about.slice(0, 50) + "..."}</p>
                    <h4 className='text-md font-semibold'>For Age : <span className='font-bold'>{age}</span></h4>
                    <h4 className='text-md font-semibold mb-4'>Time requeresd : <span className='font-bold'>{time}</span></h4>
                    <div className="card-actions justify-center mb-3">
                        <button className="btn bg-cyan-600 px-10">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;