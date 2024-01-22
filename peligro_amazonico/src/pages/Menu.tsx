import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import { createBrowserHistory } from 'history';

const Menu: React.FC = () => {

    const history = createBrowserHistory(); //to pass elements between pages

    const [playerName, setPlayerName] = useState('');

    const [isOnline, setIsOnline] = useState(false);

    const handleClickOnline = () => {
        setIsOnline(true);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    }

    const handleClickLocal = () => {
        history.push('/jugadores');
        window.location.reload();
    }

    const handleBack = () => {
        setIsOnline(false);
    }

    const handleCreateGroup = () => {

        if (playerName == '') {
            alert('Ingrese un nombre de jugador');
            return;
        }

        history.push('/crear-grupo');
        window.location.reload();        
    }

    const handleJoinGroup = () => {

        if (playerName == '') {
            alert('Ingrese un nombre de jugador');
            return;
        }

        history.push('/unirse-grupo');
        window.location.reload();        
    }


    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            
            <AppBar />
            {isOnline &&  <a onClick={handleBack} className='m-3 text-white underline text-xl'> {"<"} Atrás</a>}
            <div className='m-3 flex flex-col h-full items-center'>
                
                <h1 className='title'>Seleccione modo de juego</h1>
                <div className='flex-col flex h-auto w-full mt-[5%] space-y-2 items-center'>
                    {isOnline ? (
                        // Render the online menu buttons when isOnline is true
                        <>
                            <input
                                placeholder='Ingrese el nombre del jugador'
                                className='rounded-full w-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500'
                                value={playerName}
                                onChange={handleInputChange}
                            />
                            <button onClick={handleCreateGroup} className='principal-button'>Crear Grupo</button>
                            <button onClick={handleJoinGroup} className='principal-button'>Unirse a Grupo</button>
                            
                        </>
                    ) : (
                        // Render the original buttons when isOnline is false
                        <>
                            <button onClick={handleClickLocal} className='principal-button'>Local</button>
                            <button onClick={handleClickOnline} className='principal-button'>En línea</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;

