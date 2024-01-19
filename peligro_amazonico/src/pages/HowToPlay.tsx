import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"

const HowToPlay: React.FC = () => {
    return (
        <div className='main_div'>
            <AppBar />

            <h1 className='home_title'>¿Cómo Jugar?</h1>
            <p>
El juego comienza con 16 cartas volteadas y ordenadas de forma aleatoria. Cada jugador                (2-4 jugadores) tendrá un turno para voltear dos cartas, si las cartas son iguales, el jugador recibe un punto y vuelve a elegir otras dos cartas. Si no lo son, las cartas se vuelven a voltear y le da el turno al siguiente jugador. El juego termina cuando todas las cartas hayan sido descubiertas, y gana el jugador con más puntos. </p>
            
        </div>
    );
};

export default HowToPlay;
