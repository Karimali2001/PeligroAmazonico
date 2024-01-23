import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppBar from '../components/AppBar';
import "../App.css"
import Player from '../components/Player';
import CardGame from '../components/Card';
import rightSound from '../assets/right.wav';
import wrongSound from '../assets/wrong.wav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


type Player = {
    name: string;
    score: number;
    color: string;
};

const Game: React.FC = () => {


    // Get the players list from the previous page
    const location = useLocation();

    const history = createBrowserHistory(); // To redirect to another page

    // The inputList passed from the Players component
    const playersList = location.state && location.state.inputList ? location.state.inputList : [];

    const finalImgs = location.state && location.state.finalImgs ? location.state.finalImgs : []; //the final images to be displayed


    const [playerTurn, setPlayerTurn] = useState(0); //the player turn

    const bgColors = ["#34A2C5", "#34C554", "#EC68E7", "#7BDCFA"]; //background colors for each player

    //to show matched cards at end
    const [showCards, setShowCards] = useState<number[]>([]);

    //to not let the player click on the cards while the timeout is active
    const [isTimeoutActive, setIsTimeoutActive] = useState(false);

    // State for the currently flipped cards and the erased Cards
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [erasedCards, setErasedCards] = useState<number[]>([]);

    // Declare players state here
    const [players, setPlayers] = useState(
        playersList.map((player: any, index: number) => ({
            name: player.playerName,
            score: 0,
            color: bgColors[index % bgColors.length]
        }))
    );




    const handleCardClick = (index: number) => {

        if (!isTimeoutActive) {
            //manages when user clicks on same card many times
            if (flippedCards.length == 2 || flippedCards[0] == index) return;
            setFlippedCards(prevFlippedCards => [...prevFlippedCards, index]);
        }
    };

    //to use the updated version of flippedCards
    useEffect(() => {

        if (flippedCards.length == 2) {

            setIsTimeoutActive(true);


            if (finalImgs[flippedCards[0]].name == finalImgs[flippedCards[1]].name) {



                setTimeout(() => {
                    // Play the right sound
                    new Audio(rightSound).play();
                    // Increase the score of the first player by 1
                    setPlayers((prevPlayers: any[]) =>
                        prevPlayers.map((player: { score: number; }, index: number) =>
                            index === playerTurn ? { ...player, score: player.score + 1 } : player
                        )
                    );
                    setErasedCards(prevErasedCards => [...prevErasedCards, flippedCards[0], flippedCards[1]])
                    setShowCards(prevShowCards => [...prevShowCards, flippedCards[0]])

                }, 3000);


            } else {


                setTimeout(() => {
                    // Play the wrong sound
                    new Audio(wrongSound).play();
                    setPlayerTurn(playerTurn + 1);
                    //reset to 0 (first player)
                    if ((playerTurn + 1) >= players.length)
                        setPlayerTurn(0);

                }, 2000);


            }

            setTimeout(() => {
                setFlippedCards([]);
                setIsTimeoutActive(false);
            }, 3000);
        }

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

    // Check if the game is finished
    useEffect(() => {
        if (erasedCards.length === 16) {
            // The game is finished
            //order the players by score
            setTimeout(() => {

                const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

                history.push('/top', { sortedPlayers });
                window.location.reload();
            }, 3000);
        }
    }, [erasedCards]);


    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'scroll' }}>

            <AppBar />


            <div className='m-3 relative h-full'>

                <a onClick={handleExit} className='text-white underline text-xl'> {"<"} Salir</a>

                <h1 className={`title text-center ${isSmallScreen ? 'mt-6' : ''}`}> {erasedCards.length === 16 ? '¡Juego Terminado!' : `¡Turno de ${players[playerTurn].name}!`}</h1>

                <div className={`flex ${isSmallScreen ? 'mt-6' : ''}`}>
                    <Player color={bgColors[0]} name={players[0].name} number={players[0].score} />
                    <div className='flex flex-grow justify-end'>
                        <Player color={bgColors[1]} name={players[1].name} number={players[1].score} />
                    </div>
                </div>



                <div className={`space-y-1 ${isSmallScreen ? 'mt-10' : ''}`}>

                    {[...Array(Math.ceil(finalImgs.length / 4))].map((_, i) => (

                        <div key={i} className='flex flex-grow space-x-1 justify-center' style={{ margin: '0 4' }}>

                            {finalImgs.slice(i * 4, i * 4 + 4).map((img: any, j: number) => (

                                <CardGame key={j} img={img.path} name={img.name} index={i * 4 + j} erasedCards={erasedCards} flippedCards={flippedCards} onClick={() => handleCardClick(i * 4 + j)} isTimeoutActive={isTimeoutActive} />

                            ))}

                        </div>

                    ))}

                </div>



                <div className={`flex ${isSmallScreen ? 'mt-10' : ''}`}>
                    {players.length >= 3 && (
                        <Player color={bgColors[2]} name={players[2].name} number={players[2].score} />
                    )}
                    {players.length >= 4 && (
                        <div className='flex flex-grow justify-end'>
                            <Player color={bgColors[3]} name={players[3].name} number={players[3].score} />
                        </div>
                    )}

                </div>
                <hr className="border-t-8 border-black-2000" />
                <div className='flex flex-wrap mt-[1%] space-x-2 justify-center space-y-1'>

                    {showCards.map((index: number) => (
                        <Button onClick={() => window.open(finalImgs[index].wikipedia, '_blank')}>
                            <Card key={index} sx={{ maxWidth: 400, bgcolor: 'black', width: '200px', height: '340px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={finalImgs[index].path}
                                        alt={finalImgs[index].name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            {finalImgs[index].name}
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            {finalImgs[index].content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Button>
                    ))}


                </div>
            </div>


        </div>
    );
};

export default Game;
