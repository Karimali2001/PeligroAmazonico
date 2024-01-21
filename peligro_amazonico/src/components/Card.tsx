import React, { useState } from 'react';

interface CardProps {
    img: string;
    name: string;
    index: number;
    onClick: (name: string, index:number) => void; 
    erasedCards: number[];
}

const Card: React.FC<CardProps> = ({ img, name, onClick, index, erasedCards }) => {
    const isErased = erasedCards.includes(index); //if the card is erased

    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleClick = () => {
        
        if(isErased) return;

        setIsImageVisible(!isImageVisible);
        
        if (!isImageVisible) {
            // window.responsiveVoice.speak(name); //it will speak the name of the specie
        }
        onClick(name, index);
    };

    return (
        <div onClick={handleClick} className={`w-20 h-20 ${isImageVisible ? '' : 'bg-black'}  ${isErased ? 'bg-transparent' : isImageVisible ? '' : 'bg-black'}`} style={{ borderRadius: '10px' }}>
            {isImageVisible && !isErased && <img src={img} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
    );
};

export default Card;
