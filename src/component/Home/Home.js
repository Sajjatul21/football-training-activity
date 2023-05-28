import React, { useEffect, useState } from 'react';
import "./Home.css";
import Header from '../Header/Header';
import Player from '../Player/Player';
import Mydetails from '../Mydetails/Mydetails';
const Home = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('fackdb.json')
            .then(res => res.json())
            .then(data => setPlayers(data));

    }, []);
    return (

        <div className="cart-container">
            <div className='cart-bg'> 
                <Header></Header>

                {/*-------------- players--------------- */}

                {<div className='grid grid-cols-3 gap-5 ml-32 mr-20'>
                    {
                        players.map(player => <Player player={player} key={player._id}></Player>)
                    }
                </div>}
            </div>



            {/*---------------------- cart details------------------ */}

            <div className='m-5'>
                <Mydetails></Mydetails>
                
            </div>
        </div>

    );
};

export default Home;