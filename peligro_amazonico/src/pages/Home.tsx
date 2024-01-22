import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import logo from '../assets/Logo.svg';



const Home: React.FC = () => {
    function onClick() {
        window.location.href = '/jugadores';
    }
    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',overflow: 'auto' }}>
            <AppBar />
            <div className='m-3 relative h-full items-center'>
                <img src={logo} alt="logo" />
                <h1 className='text-white title'>¿Quieres aprender de forma divertida
                    sobre los seres vivos peligrosos que
                    habitan en el Amazonas?</h1>
                <button className='principal-button mt-[10%]' onClick={onClick} style={{ marginTop: '8%', marginBottom: '20px' }}>Jugar</button>
            </div>

        </div>
    );
};

export default Home;
