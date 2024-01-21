import React, { useState } from 'react';

interface CardProps {
    img: string;
    name: string;
    index: number;
    onClick: (name: string, index:number) => void; 
    erasedCards: number[];
    flippedCards: number[];
}

const Card: React.FC<CardProps> = ({ img, name, onClick, index, erasedCards, flippedCards }) => {
    const isErased = erasedCards.includes(index); //if the card is erased
    const isFlipped = flippedCards.includes(index); //if the card is flipped

    const handleClick = () => {
        
        if(isErased) return;

        
        if (!isFlipped) {
            // window.responsiveVoice.speak(name); //it will speak the name of the specie
        }
        onClick(name, index);
    };

    return (
        <div onClick={handleClick} className={`w-20 h-20 ${isFlipped ? '' : 'bg-black'}  ${isErased ? 'bg-transparent' : isFlipped ? '' : 'bg-black'}`} style={{ borderRadius: '10px' }}>
            {isFlipped && !isErased && <img src={img} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
    );
};

export default Card;
