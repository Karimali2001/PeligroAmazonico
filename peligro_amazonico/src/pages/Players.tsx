import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import { FaPlus, FaMinus } from 'react-icons/fa';

const Players: React.FC = () => {
    return (
        <div className='bg-[#FFB534]'>

            <AppBar />

            <div className='m-3'>

                <h1 className='title'>Ingrese los jugadores</h1>

                <div className='flex items-center '>

                    <p className='font-extrabold size'>Jugadores</p>

                    <button className='rounded-full bg-[#C70000] text-white p-2 w-10 h-10 flex items-center justify-center font-bold font-extrabold text-xl border-4 hover:border-[#C70000]'>
                        <FaMinus />
                    </button>
                    <button className='rounded-full bg-[#65B741] text-white p-2 w-10 h-10 flex items-center justify-center font-bold font-extrabold text-xl border-4 hover:border-[#65B741]'>
                        <FaPlus />
                    </button>
                </div>


                <div className='flex flex-col items-center'>



                    <button className='principal-button'>Jugar</button>

                </div>

            </div>

        </div>
    );
};

export default Players;
