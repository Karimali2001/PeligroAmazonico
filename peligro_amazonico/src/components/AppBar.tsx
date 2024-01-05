import React from 'react';
import logo from '../assets/Peligro.svg';

const AppBar: React.FC = () => {
    return (
        <div className="app-bar" style={{ backgroundColor: '#D4D4D4', width: '100%', height: '50px' }}>
            <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        </div>
    );
};

export default AppBar;
