import React, { useState } from 'react';

interface CardProps {
    img: string;
}

const Card: React.FC<CardProps> = ({ img }) => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleClick = () => {
        setIsImageVisible(!isImageVisible);
    };

    return (
        <div onClick={handleClick} className={`w-20 h-20 ${isImageVisible ? '' : 'bg-black'}`} style={{borderRadius:'10px'}}>
            {isImageVisible && <img src={img} alt="Imagen" style={{ width: '100%', height: '100%',  objectFit: 'cover' }} />}
        </div>
    );
};

export default Card;