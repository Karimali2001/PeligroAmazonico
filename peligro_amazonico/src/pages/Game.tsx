import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import AppBar from '../components/AppBar';
import "../App.css"
import Player from '../components/Player';

const Game: React.FC = () => {

    const handleExit = () => {
        window.location.href = '/jugadores';
    }

    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>

            <AppBar />

            <div className='m-3 relative h-full'>

                <a onClick={handleExit} className='text-white underline text-xl'> {"<"} Salir</a>

                <h1 className='title text-center'>¡Turno de Karim!</h1>

                <div className='flex'>
                    <Player color='blue' name='Karim' number={0} />
                    <div className='flex flex-grow justify-end'>
                        <Player color='blue' name='Oriana' number={0} />
                    </div>
                </div>

                <div className='flex flex-grow' style={{margin:'0 4'}}>
                    <div className='h-12 w-12 bg-[#000000]' style={{ borderRadius: 10 }}>
                    </div>
                    <div className='h-12 w-12 bg-[#000000]' style={{ borderRadius: 10 }}>
                    </div>
                    <div className='h-12 w-12 bg-[#000000]' style={{ borderRadius: 10 }}></div>
                    <div className='h-12 w-12 bg-[#000000]' style={{ borderRadius: 10 }}></div>
                </div>


                <div className='flex'>
                    <Player color='blue' name='Valeria' number={0} />
                    <div className='flex flex-grow justify-end'>
                        <Player color='blue' name='Gabriel' number={0} />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Game;
