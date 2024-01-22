import React from 'react';

interface CardProps {
    img: string;
    name: string;
    index: number;
    onClick: (name: string, index:number) => void; 
    erasedCards: number[];
    flippedCards: number[];
    isTimeoutActive: boolean;
}

declare global {
    interface Window {
        responsiveVoice: any;
    }
}

const Card: React.FC<CardProps> = ({ img, name, onClick, index, erasedCards, flippedCards, isTimeoutActive }) => {
    const isErased = erasedCards.includes(index); //if the card is erased
    const isFlipped = flippedCards.includes(index); //if the card is flipped

    const handleClick = () => {
        
        if(isErased) return;

        
        if (!isFlipped && !isTimeoutActive) {
            window.responsiveVoice.speak(name); //it will speak the name of the specie
        }
        onClick(name, index);
    };

    return (
        <div onClick={handleClick} className={`w-24 h-24 ${isFlipped ? '' : 'bg-black'}  ${isErased ? 'bg-transparent' : isFlipped ? '' : 'bg-black'}`} style={{ borderRadius: '10px' }}>
            {isFlipped && !isErased && <img src={img} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
    );
};

export default Card;
