import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppBar from '../components/AppBar';
import "../App.css"
import Player from '../components/Player';
import Card from '../components/Card';

const Game: React.FC = () => {



    // Get the players list from the previous page
    const location = useLocation();

    const history = createBrowserHistory(); // To redirect to another page

    // The inputList passed from the Players component
    const playersList = location.state && location.state.inputList ? location.state.inputList : [];

    const finalImgs = location.state && location.state.finalImgs ? location.state.finalImgs : [];

    console.log(finalImgs);
    

    // State for the currently flipped cards and the found pairs
    const [flippedCards, setFlippedCards] = useState<string[]>([]);
    const [foundPairs, setFoundPairs] = useState<number[]>([]);
    const [erasedCards, setErasedCards] = useState<number[]>([]);

    const handleCardClick = (name: string, index:number) => {

        

        setFlippedCards(prevFlippedCards => [...prevFlippedCards, name]);

        setErasedCards(prevErasedCards => [...prevErasedCards,index]);




        // // console.log("shramit");
        // // console.log(flippedCards);

        // // If two cards have been flipped, check for a match
        // if (flippedCards.length === 2) {
        //     const [card1Index, card2Index] = flippedCards;
        //     const card1 = finalImgs[card1Index];
        //     const card2 = finalImgs[card2Index];

        //     if (card1.name === card2.name) {

        //         // If the cards match, add their indices to the found pairs
        //         setFoundPairs((prev) => [...prev, card1Index, card2Index]);
        //     }



        //     // Either way, reset the flipped cards after a short delay
        //     setTimeout(() => setFlippedCards([]), 1000);
        // }
    };

    //to use the updated version of flippedCards
    useEffect(() => {

    }, [flippedCards]);

    const handleExit = () => {
        history.push('/jugadores');
        window.location.reload();
    }

    // Check if the screen is small (mobile) or large (desktop) RESPONSIVE
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerHeight < 1000);
        };

        // Check screen size on initial render
        checkScreenSize();

        // Check screen size whenever the window is resized
        window.addEventListener('resize', checkScreenSize);

        // Clean up event listener when component unmounts
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    const bgColors = ["#34A2C5", "#34C554", "#EC68E7", "#7BDCFA"]; //background colors for each player


    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>

            <AppBar />


            <div className='m-3 relative h-full'>

                <a onClick={handleExit} className='text-white underline text-xl'> {"<"} Salir</a>

                <h1 className={`title text-center ${isSmallScreen ? 'mt-6' : ''}`}>¡Turno de Karim!</h1>

                <div className={`flex ${isSmallScreen ? 'mt-6' : ''}`}>
                    <Player color={bgColors[0]} name={playersList[0].playerName} number={0} />
                    <div className='flex flex-grow justify-end'>
                        <Player color={bgColors[1]} name={playersList[1].playerName} number={0} />
                    </div>
                </div>



                <div className={`space-y-6 ${isSmallScreen ? 'mt-10' : ''}`}>

                    {[...Array(Math.ceil(finalImgs.length / 4))].map((_, i) => (

                        <div key={i} className='flex flex-grow space-x-6 justify-center' style={{ margin: '0 4' }}>

                            {finalImgs.slice(i * 4, i * 4 + 4).map((img: any, j: number) => (

                                <Card key={j} img={img.path} name={img.name} index={i * 4 + j} erasedCards={erasedCards} onClick={() => handleCardClick(img.name, i * 4 + j)} />

                            ))}

                        </div>

                    ))}

                </div>



                <div className={`flex ${isSmallScreen ? 'mt-10' : ''}`}>
                    {playersList.length >= 3 && (
                        <Player color={bgColors[2]} name={playersList[2].playerName} number={0} />
                    )}
                    {playersList.length >= 4 && (
                        <div className='flex flex-grow justify-end'>
                            <Player color={bgColors[3]} name={playersList[3].playerName} number={0} />
                        </div>
                    )}

                </div>

            </div>


        </div>
    );
};

export default Game;
