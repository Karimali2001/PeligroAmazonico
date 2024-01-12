import React from 'react';
import logo from '../assets/Peligro.svg';

const AppBar: React.FC = () => {
    return (
        <div className="app-bar" style={{ backgroundColor: '#FBF6EE', width: '100%', height: '50px', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{marginLeft:'3%', width: '50px', height: '50px' }} />     
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900" style={{marginLeft:'10px', textDecoration: 'none', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Inicio
            </a>

            <a href="/comojugar" className="text-sm font-semibold leading-6 text-gray-900" style={{marginLeft:'5%', textDecoration: 'none', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Cómo Jugar
            </a>

        </div>
    );
};

export default AppBar;
