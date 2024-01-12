import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"
import logo from '../assets/Logo.svg';
  


const Home: React.FC = () => {
    return (
        <div className='main_div'>
            <AppBar />
                <img src={logo} alt="logo" />
                <h1 className='home_title'>¿Quieres aprender de forma divertida
                    sobre los seres vivos peligrosos que
                    habitan en el Amazonas?</h1>
                   <button   style={{marginTop:'8%'}}>Jugar</button>
        </div>
    );
};

export default Home;
