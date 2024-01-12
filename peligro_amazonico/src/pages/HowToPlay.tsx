import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"

const HowToPlay: React.FC = () => {
    return (
        <div className='main_div'>
            <AppBar />

            <h1>¿Cómo Jugar?</h1>
            <p>This is the starting point of your application.</p>

        </div>
    );
};

export default HowToPlay;
