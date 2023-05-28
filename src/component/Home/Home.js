import React, { useEffect, useState } from 'react';
import "./Home.css";
import Header from '../Header/Header';
import Player from '../Player/Player';
import Mydetails from '../Mydetails/Mydetails';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [breakTime, setBreakTime] = useState(0);
    const [practiceTimes, setPracticeTimes] = useState(0);
    useEffect(() => {
        fetch('fackdb.json')
            .then(res => res.json())
            .then(data => setPlayers(data));

    }, []);

    const handlePlayer = ({ time }) => {
        setPracticeTimes(time + practiceTimes);

    };
    console.log(practiceTimes);




    const handleBreakTime = (e) => {
        let buttonValue = e.target.textContent;
        if (buttonValue === "10m") {
            buttonValue = 10;
        }
        else if (buttonValue === "20m") {
            buttonValue = 20;
        }
        else if (buttonValue === "30m") {
            buttonValue = 30;
        }
        else {
            buttonValue = 40;
        }
        setBreakTime(buttonValue);
    };



    return (

        <div className="cart-container">
            <div className='cart-bg'>
                <Header></Header>

                {/*-------------- players--------------- */}

                {<div className='grid grid-cols-3 gap-5 ml-32 mr-20'>
                    {
                        players.map(player => <Player player={player} key={player._id} handlePlayer={handlePlayer}></Player>)
                    }
                </div>}
            </div>



            {/*---------------------- cart details------------------ */}

            <div className='m-5'>
                <Mydetails></Mydetails>
                <Break handleBreakTime={handleBreakTime}></Break>
                <Exercise breakTime={breakTime} practiceTimes={practiceTimes}></Exercise>
            </div>
        </div>

    );
};

export default Home;