import React from 'react';
import "./Home.css";
import Header from '../Header/Header';
const Home = () => {
    return (

        <div className="container">
            <div className="cart-container ml-28 mt-20">
                <Header></Header>
            </div>

            <div className="show-details bg-cyan-100">
                <h3>I am from details</h3>
            </div>
        </div>

    );
};

export default Home;