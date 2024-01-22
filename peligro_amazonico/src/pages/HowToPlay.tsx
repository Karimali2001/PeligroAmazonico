import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"

const HowToPlay: React.FC = () => {

    function onClick() {
        window.location.href = '/menu';
    }
    return (




        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>
            <AppBar />
            <div className='m-3'>

                <div className='m-auto flex items-center justify-center flex-col'>

                    <h1 className='title text-white'>¿Cómo Jugar?</h1>

                    <p className='text-[28px] font-bold text-center mt-[2%]'>
                        El juego comienza con 16 cartas volteadas y ordenadas de forma aleatoria. Cada jugador                (2-4 jugadores) tendrá un turno para voltear dos cartas, si las cartas son iguales, el jugador recibe un punto y vuelve a elegir otras dos cartas. Si no lo son, las cartas se vuelven a voltear y le da el turno al siguiente jugador. El juego termina cuando todas las cartas hayan sido descubiertas, y gana el jugador con más puntos. 
                    </p>

                    <button className='principal-button mt-[10%]' onClick={onClick} style={{ marginTop: '8%', marginBottom: '20px' }}>Jugar</button>
                </div>
            </div>

        </div>
    );
};

export default HowToPlay;
