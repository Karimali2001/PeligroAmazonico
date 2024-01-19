import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import logo from '../assets/Logo.svg';



const Home: React.FC = () => {
    function onClick(){
        window.location.href = '/jugadores';
    }
    return (
        <div className='bg-[#FFB534] flex flex-col items-center'>
            <AppBar />
                <img src={logo} alt="logo" />
                <h1 className='text-white'>¿Quieres aprender de forma divertida
                    sobre los seres vivos peligrosos que
                    habitan en el Amazonas?</h1>
                   <button  onClick={onClick} style={{marginTop:'8%', marginBottom:'20px'}}>Jugar</button>
        </div>
    );
};

export default Home;
