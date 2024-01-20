import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import { FaPlus, FaMinus } from 'react-icons/fa';

const Players: React.FC = () => {
    const [inputList, setInputList] = useState([{ playerName: "" }, { playerName: "" }]);

    const [players, setPlayers] = useState<number>(2); // number of players

   
    const bgColors = ["#34A2C5", "#34C554","#EC68E7", "#7BDCFA"]; //background colors for each player

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputList];
        list[index] = { ...list[index], [name]: value };
        setInputList(list);
    }
    
    
    const handleAddClick = () => {
        if(players >= 4){
            alert(" Se permiten máximo 4 jugadores");
            return;
        }
        setPlayers(players + 1);
        setInputList([...inputList, { playerName: "" }]);
    }

    const handleRemoveClick = () => {
        if (players <= 2) {
            alert("Se permiten mínimo 2 jugadores");
            return;
        }
        setPlayers(players - 1);
        const list: any = [...inputList];
        list.pop(); // Remove the last element from the array
        setInputList(list);
    }

    const handleClickPlay = () => {
        window.location.href = '/juego';
    }
        
    

    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>

            <AppBar />
            <div className='m-3 relative h-full'>

                <h1 className='title'>Ingrese los jugadores</h1>

                <div className='flex items-center mt-6'>

                    <h2 className='font-extrabold text-2xl'>Jugadores</h2>

                    <div className='flex-grow flex justify-end space-x-2'>

                        <button onClick={handleRemoveClick} className='rounded-full bg-[#C70000] text-white p-2 w-10 h-10 border-4 hover:border-[#C70000]'>
                            <FaMinus />
                        </button>

                        <button onClick={handleAddClick} className='rounded-full bg-[#65B741] text-white p-2 w-10 h-10 border-4 hover:border-[#65B741]'>
                            <FaPlus />
                        </button>
                    </div>

                </div>


                <div className='flex flex-col items-center mt-3 min-h-screen'>

                    <div className='w-full space-y-4'>
                        {inputList.map((x, i) => {
                            return (
                                <input
                                    key={i}
                                    name='playerName'
                                    placeholder={`Ingrese el nombre del jugador ${i + 1}`}
                                    style={{ backgroundColor: bgColors[i] }}
                                    className='rounded-full w-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 text-white placeholder-white'
                                    value={x.playerName}
                                    onChange={e => handleInputChange(e, i)}
                                    readOnly={false} 
                                />
                            );
                        }
                        )}
                        
                    </div>

                    <button onClick={handleClickPlay} className='principal-button mt-[10%]'>Jugar</button>

                </div>

            </div>

        </div>
    );
    };

    export default Players;
