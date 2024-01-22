import React from 'react';
import "../App.css"
import AppBar from '../components/AppBar';
import { useLocation } from 'react-router-dom';


type Player = {
    name: string;
    score: number;
    color: string;
};

const players: Player[] = [
    { name: 'Player 1', score: 100, color: '#34A2C5' },
    { name: 'Player 2', score: 200, color: '#34C554' },
    { name: 'Player 3', score: 150, color: '#EC68E7' },
    { name: 'Player 3', score: 150, color: '#7BDCFA' },
];


const Top: React.FC = () => {

    const location = useLocation();
    const players = location.state && location.state.sortedPlayers ? location.state.sortedPlayers : [];

    function handleClickPlay() {
        window.location.href = '/jugadores';
    }

    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>

            <AppBar />
            <div className='m-3 relative h-full'>

                <h1 className='title' style={{ textAlign: 'center' }}>Top Jugadores</h1>

                <div className='flex flex-col items-center mt-3'>

                    <ul className="space-y-2 w-full">
                        {players.map((player: Player, index: number) => (
                            <li
                                key={player.name}
                                className="flex items-center justify-between p-4 rounded"
                                style={{ backgroundColor: player.color }}
                            >
                                <span>{index + 1}</span>
                                <span>{player.name}</span>
                                <span>{player.score}</span>
                            </li>
                        ))}
                    </ul>

                    <button onClick={handleClickPlay} className='principal-button mt-[10%]' style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>¡Otra Vez!</button>

                </div>

            </div>

        </div>
    );
};

export default Top;