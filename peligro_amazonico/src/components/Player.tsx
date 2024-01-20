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
            <div className={`w-14 h-14 rounded-full flex justify-center items-center`} style={{backgroundColor: color}}>
                <FaUser />
            </div>
            <p className='underline text-white'>{name}</p>
            <p className='font-extrabold '>{number}</p>
        </div>
    );
};

export default Player;


