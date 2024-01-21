import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppBar from '../components/AppBar';
import "../App.css"
import Player from '../components/Player';
import Card from '../components/Card';

import jaguar from '../assets/game-imgs/jaguar.svg';
import {images as imgs} from './images';

const Game: React.FC = () => {

    const location = useLocation();

    const history = createBrowserHistory(); //to pass elements between pages

    // The inputList passed from the Players component
    const playersList = location.state && location.state.inputList ? location.state.inputList : [];

    console.log(imgs[9].path);

    const playersLength = playersList.length;

    


    const handleExit = () => {
        history.push('/jugadores');
        window.location.reload();
    }

    // Check if the screen is small (mobile) or large (desktop) RESPONSIVE
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerHeight < 1000);
        };

        // Check screen size on initial render
        checkScreenSize();

        // Check screen size whenever the window is resized
        window.addEventListener('resize', checkScreenSize);

        // Clean up event listener when component unmounts
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    const bgColors = ["#34A2C5", "#34C554", "#EC68E7", "#7BDCFA"]; //background colors for each player


    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>

            <AppBar />


            <div className='m-3 relative h-full'>

                <a onClick={handleExit} className='text-white underline text-xl'> {"<"} Salir</a>

                <h1 className={`title text-center ${isSmallScreen ? 'mt-6' : ''}`}>¡Turno de Karim!</h1>

                <div className={`flex ${isSmallScreen ? 'mt-6' : ''}`}>
                    <Player color={bgColors[0]} name={playersList[0].playerName} number={0} />
                    <div className='flex flex-grow justify-end'>
                        <Player color={bgColors[1]} name={playersList[1].playerName} number={0} />
                    </div>
                </div>

                <div className={`space-y-6 ${isSmallScreen ? 'mt-10' : ''}`}>
                    <div className='flex flex-grow space-x-6 justify-center'>
                        <Card img={jaguar} />
                        <Card img={imgs[9].path} />
                        <Card img={jaguar}/>
                        <Card img={jaguar} />
                    </div>

                    <div className='flex flex-grow space-x-6 justify-center' style={{ margin: '0 4' }}>
                        <Card img={jaguar}/>
                        <Card img={jaguar}/>
                        <Card img={imgs[0].path}/>
                        <Card img={jaguar}/>
                    </div>
                    <div className='flex flex-grow space-x-6 justify-center' style={{ margin: '0 4' }}>
                        <Card img={jaguar}/>
                        <Card img={jaguar}/>
                        <Card img={jaguar}/>
                        <Card img={jaguar}/>
                    </div>

                    <div className='flex flex-grow space-x-6 justify-center' style={{ margin: '0 4' }}>
                        <Card img={jaguar}/>
                        <Card img={jaguar} />
                        <Card img={jaguar}/>
                        <Card img={jaguar}/>
                    </div>

                </div>


                <div className={`flex ${isSmallScreen ? 'mt-10' : ''}`}>
                    {playersList.length >= 3 && (
                        <Player color={bgColors[2]} name={playersList[2].playerName} number={0} />
                    )}
                    {playersList.length >= 4 && (
                        <div className='flex flex-grow justify-end'>
                            <Player color={bgColors[3]} name={playersList[3].playerName} number={0} />
                        </div>
                    )}

                </div>

            </div>


        </div>
    );
};

export default Game;
