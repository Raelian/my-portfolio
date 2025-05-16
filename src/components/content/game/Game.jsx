import {useState} from "react";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import './Game.scss';
import dungeonRogue1 from "/image/game-images/dungeon-rogue/dungeon_rogue_1.png";
import dungeonRogue2 from "/image/game-images/dungeon-rogue/dungeon_rogue_2.png";
import dungeonRogue3 from "/image/game-images/dungeon-rogue/dungeon_rogue_3.png";

const games = [
    {
        id: 1,
        title: "Dungeon Rogue Demo",
        description: `A 2D dungeon crawler developed with Godot 4 and GDScript, featuring a single expansive level composed of interconnected sections inspired by Metroidvania design principles. The level encourages exploration and strategic progression as players navigate through challenging, hand-crafted traps that demand precise timing and careful planning.
        Custom-edited visuals and a thoughtfully curated soundscape, combining original and licensed audio, work together to create an immersive atmosphere.

        A playable demo is available below, with ongoing development focused on expanding content and deepening gameplay.`,
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