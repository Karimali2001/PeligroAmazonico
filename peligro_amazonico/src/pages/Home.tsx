import React from 'react';
import AppBar from '../components/AppBar';
import "../App.css"

const Home: React.FC = () => {
    return (
        <div className='main_div'>
            <AppBar />

            <h1>Welcome to the Home page!</h1>
            <p>This is the starting point of your application.</p>

        </div>
    );
};

export default Home;
