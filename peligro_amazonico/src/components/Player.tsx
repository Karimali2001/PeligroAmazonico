import React from 'react';
import { FaUser } from 'react-icons/fa';

type PlayerProps = {
    color: string;
    name: string;
    number: number;
};

const Player: React.FC<PlayerProps> = ({ color, name, number }) => {
    return (
        <div className='text-center'>
            <div className={`w-12 h-12 bg-${color}-500 rounded-full flex justify-center items-center`}>
                <FaUser />
            </div>
            <p className='underline text-white'>{name}</p>
            <p className='font-extrabold '>{number}</p>
        </div>
    );
};

export default Player;
