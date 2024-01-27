import React, { useState } from 'react';
import { createBrowserHistory } from 'history';
import AppBar from '../components/AppBar';
import { useLocation } from 'react-router-dom';
import "../App.css"
import arania from '../assets/game-imgs/arania.svg';
import escorpion from "../assets/game-imgs/escorpion.svg";
import anaconda from "../assets/game-imgs/anaconda.svg";
import caiman from "../assets/game-imgs/caiman.svg";
import anguila from "../assets/game-imgs/anguila.svg";
import vibora from "../assets/game-imgs/serpiente.svg";
import pirania from "../assets/game-imgs/pirania.svg";
import rana from "../assets/game-imgs/rana.svg";
import chucho from "../assets/game-imgs/chucho.svg";
import jaguar from "../assets/game-imgs/jaguar.svg";
import ciempies from "../assets/game-imgs/ciempies.svg";
import mosquito from "../assets/game-imgs/mosquito.svg";
import candiru from "../assets/game-imgs/candiru.svg";
import tarantula from "../assets/game-imgs/tarantula.svg";
import trompeta from "../assets/game-imgs/trompeta.svg";
import strychnos from "../assets/game-imgs/strychnos.svg";
import curare from "../assets/game-imgs/curare.svg";
import shuar from "../assets/game-imgs/shuar.svg";

export const imgs = [
    { name: "Araña bananera", path: arania, content: "de las arañas más venenosas del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Phoneutria"},
    { name: "Escorpiones Tityus", path: escorpion, content: "Son los más venenosos de América.", wikipedia: "https://es.wikipedia.org/wiki/Tityus"},
    { name: "Anaconda verde", path: anaconda, content: "Es la serpiente más grande del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Eunectes_murinus"},
    { name: "Caimán", path: caiman, content: "reptil que habita en las aguas dulces de la Amazonía.", wikipedia: "https://es.wikipedia.org/wiki/Caiman"},
    { name: "Anguila eléctrica", path: anguila, content: "puede generar descargas eléctricas de hasta 600 voltios.", wikipedia: "https://es.wikipedia.org/wiki/Electrophorus_electricus"},
    { name: "Víbora barba amarilla", path: vibora, content: "de las serpientes más venenosas del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Bothrops_asper"},
    { name: "Piraña amazónica", path: pirania, content: "pez carnívoro que habita en las aguas dulces.", wikipedia: "https://es.wikipedia.org/wiki/Pira%C3%B1a"},
    { name: "Rana punta de flecha", path: rana, content: "Las tribus indígenas usan su veneno en sus flechas.", wikipedia: "https://es.wikipedia.org/wiki/Dendrobates"},
    { name: "Chuchos de agua dulce", path: chucho, content: "Viven agua dulce y tienen un aguijón venenoso.", wikipedia: "https://es.wikipedia.org/wiki/Potamotrygonidae"},
    { name: "Jaguar", path: jaguar, content: "Es el felino con la mandíbula más fuerte del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Panthera_onca"},
    { name: "Ciempiés gigante amazónico", path: ciempies, content: "Es el ciempiés más grande del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Scolopendra_gigantea"},
    { name: "Mosquito", path: mosquito, content: "Es el animal que mata más personas cada año.", wikipedia: "https://es.wikipedia.org/wiki/Mosquito"},
    { name: "Candirú", path: candiru, content: "pez que puede entrar por los orificios del cuerpo humano.", wikipedia: "https://es.wikipedia.org/wiki/Vandellia_cirrhosa"},
    { name: "Tarántula Goliat", path: tarantula, content: "Es la araña más grande del mundo.", wikipedia: "https://es.wikipedia.org/wiki/Theraphosa_blondi"},
    { name: "Trompeta de Angel", path: trompeta, content: "planta que se usa para envenenar dardos.", wikipedia: "https://es.wikipedia.org/wiki/Brugmansia"},
    { name: "Strychnos", path: strychnos, content: "planta que se usa para envenenar dardos.", wikipedia: "https://es.wikipedia.org/wiki/Strychnos"},
    { name: "Curare", path: curare, content: "planta que se usa para envenenar dardos.", wikipedia: "https://es.wikipedia.org/wiki/Curare"},
    { name: "Tribu Shuar", path: shuar, content: "Es considerada la tribu indígena más peligrosa del amazonas.", wikipedia: "https://es.wikipedia.org/wiki/Shuar"},
];

const Multiplayers: React.FC = () => {

    const [players, setPlayers] = useState<number>(2); // number of players

    const location = useLocation();

    const playerName = location.state && location.state.playerName ? location.state.playerName : {playerName: ""};

    const groupCode = location.state && location.state.groupCode ? location.state.groupCode : {groupCode: ""};
    
    const [inputList, setInputList] = useState([{ playerName: playerName }, { playerName: "" }]);


    const bgColors = ["#34A2C5", "#34C554", "#EC68E7", "#7BDCFA"]; //background colors for each player

    const history = createBrowserHistory(); //to pass elements between pages

    // Step 1: Shuffle the imgs array
    let shuffledImgs = [...imgs].sort(() => Math.random() - 0.5);

    // Step 2: Slice the first 8 elements
    let slicedImgs = shuffledImgs.slice(0, 8);

    // Step 3: Duplicate the sliced array
    let duplicatedImgs = [...slicedImgs, ...slicedImgs];

    // Step 4: Shuffle the array of 16 elements
    let finalImgs = duplicatedImgs.sort(() => Math.random() - 0.5);

    const handleClickPlay = () => {

        // Check if the player names are empty
        for (let i = 0; i < players; i++) {
            if (inputList[i].playerName === "") {
                alert("Ingrese el nombre de todos los jugadores");
                return;
            }
        }

        // Pass the inputList as state to the '/juego' route
        history.push('/juego', { inputList, finalImgs });
        window.location.reload();
    }



    return (
        <div className='bg-[#FFB534]' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>

            <AppBar />
            <div className='m-3 relative h-full'>

                <h1 className='title'>Ingrese los jugadores</h1>

                <div className='flex items-center mt-6'>

                    <h2 className='font-extrabold text-2xl'>Jugadores</h2>

                    <div className='flex-grow flex justify-end'>
                    <h2 className='font-extrabold text-2xl'>Código: {groupCode}</h2>
                    </div>

                </div>


                <div className='flex flex-col items-center mt-3 min-h-screen'>

                    <div className='w-full space-y-4'>
                        {inputList.map((x, i) => {
                            return (
                                <input
                                    key={i}
                                    name='playerName'
                                    placeholder={`Esperando por jugador ${i + 1}`}
                                    style={{ backgroundColor: bgColors[i] }}
                                    className='rounded-full w-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 text-white placeholder-white'
                                    value={x.playerName}
                                    readOnly={true}
                                />
                            );
                        }
                        )}

                    </div>

                    <button onClick={handleClickPlay} className='principal-button mt-[10%]'>Jugar</button>

                </div>

            </div>

        </div>
    );
};

export default Multiplayers;

