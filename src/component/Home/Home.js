import React, { useEffect, useState } from 'react';
import "./Home.css";
import Header from '../Header/Header';
import Player from '../Player/Player';
const Home = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('fackdb.json')
            .then(res => res.json())
            .then(data => setPlayers(data));

    }, []);
    return (

        <div className="cart-container">
            <div>
                <Header></Header>

                {/*-------------- players--------------- */}

                {<div className='grid grid-cols-3 gap-7 ml-32 mr-28'>
                    {
                        players.map(player => <Player player={player} key={player._id}></Player>)
                    }
                </div>}
            </div>



            {/*---------------------- cart details------------------ */}

            <div className='bg-cyan-600'>
                <h3>I am from details. </h3>
            </div>
        </div>

    );
};

export default Home;