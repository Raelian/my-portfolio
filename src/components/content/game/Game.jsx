import React, {useState} from "react";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import './Game.scss';
import dungeonRogue1 from "/image/game-images/dungeon-rogue/dungeon_rogue_1.png";
import dungeonRogue2 from "/image/game-images/dungeon-rogue/dungeon_rogue_2.png";
import dungeonRogue3 from "/image/game-images/dungeon-rogue/dungeon_rogue_3.png";

const games = [
    {
        id: 1,
        title: "Dungeon Rogue Demo",
        description: `Dungeon Rogue was my first game development project, created using Godot 4 and GDScript. It allowed me to apply and expand upon the object-oriented programming (OOP) principles I had learned, while also introducing me to key game design and development techniques, including game logic, user input handling, collision detection, level design, debugging, and much more.

                    Beyond coding, I designed creative and challenging traps and scenarios, which helped me learn how to develop engaging gameplay and design interesting challenges for players. I also expanded my skills in sound design by recording and editing game sound effects, as well as modifying sprites and assets to enhance both the visual and audio experience.

                    This project provided me with hands-on experience in various aspects of game development, from level design to interactive gameplay, and marked an important milestone in my journey as a game developer.
                    
                    The project is still a work in progress but the full demo is available!`,
        image: [
                dungeonRogue1,
                dungeonRogue2,
                dungeonRogue3
            ],
        link: "https://raelian.itch.io/dungeon-rogue"
    }
];

const Game = () => {
    const [selectedGame, setSelectedGame] = useState(games[0]);
    const [selectedImage, setSelectedImage] = useState(0);

    const changeImage = (direction) => {
        let newImage;
        if(selectedImage === 0 && direction == -1){
            newImage = selectedGame.image.length + direction;
        } else if (selectedImage === selectedGame.image.length - 1 && direction === 1){
            newImage = 0;
        } else {
            newImage = selectedImage + direction;
        }

        setSelectedImage(newImage);
    }

    return (
        <div className="game-container">
            <aside className="game-btns-container">
                <h3>Game projects</h3>
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>
                            <button 
                                className={`game-btn ${selectedGame.id === game.id ? "active-game-btn" : "inactive-game-btn"}`}
                                onClick={() => setSelectedGame(game)}
                            >
                                {game.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="games-section">
                    <h4>{selectedGame.title}</h4>
                    <p>{selectedGame.description}</p>
                    <div className="image-change-container">
                        <button onClick={() => changeImage(-1)}>
                            <FaArrowLeft className="left-btn"/>
                        </button>
                        <button  onClick={() => changeImage(1)}>
                            <FaArrowRight className="right-btn"/>
                        </button>
                    </div>
                    <a href={selectedGame.link} target="_blank">
                        <img src={selectedGame.image[selectedImage]} alt={selectedGame.title} />
                    </a>
            </section>
        </div>
    )
}

export default Game