import React from 'react';
import logo from '../assets/Peligro.svg';

const AppBar: React.FC = () => {
    return (
        <div className="app-bar bg-[#FBF6EE] w-full h-12 flex items-center">
            <img src={logo} alt="logo" className="ml-3 w-12 h-12" />     
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900 ml-2 no-underline text-black shadow-text" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                Inicio
            </a>

            <a href="/comojugar" className="text-sm font-semibold leading-6 text-gray-900 ml-5 no-underline text-black shadow-text" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                Cómo Jugar
            </a>
        </div>
    );
};

export default AppBar;