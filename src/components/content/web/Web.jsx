import React, {useState} from "react";
import '../../../styles/Projects.scss';
import rpsImage from "/image/web-images/rps_game/rps_game.png";
import spaceTourism from "/image/web-images/space_tourism/space_tourism.png";
import countries from "/image/web-images/countries/countries.png";

const projects = [
    {
        id: 1,
        title: "Countries API",
        description: `A responsive web application built with React and TypeScript, integrating the 
        REST Countries API to display detailed country information. Features include real-time search, 
        region-based filtering, dynamic routing with parameterized URLs, and dark mode support.`,
        image: countries,
        link: "https://raelian.github.io/countries-api/"
    },
    {
        id: 2,
        title: "Space tourism",
        description: `A single-page, responsive website built with React and designed from Figma files. 
        The layout is fully optimized for mobile, tablet, and desktop viewports. Includes custom 
        animations to enhance user experience while maintaining visual consistency with the original design.`,
        image: spaceTourism,
        link: "https://raelian.github.io/space-tourism/"
    },
    {
        id: 3,
        title: "RPS game",
        description: `An interactive, fully responsive game built with React, featuring both a classic mode 
        (Rock-Paper-Scissors) and an advanced mode that includes Lizard and Spock. The interface includes 
        a mode toggle and supports score persistence via local storage, allowing scores to be retained 
        across browser sessions. Optimized for seamless gameplay on both desktop and mobile devices.`,
        image: rpsImage,
        link: "https://raelian.github.io/rock-paper-scissors-master/"
    }
];

const Web = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    return (
        <div className="projects-container">
            <aside className="projects-btns-container">
                <h3>Web projects</h3>
                <ul>
                    {projects.map((project) => (
                        <li key = {project.id}>
                            <button
                                className={`projects-btn ${selectedProject.id === project.id ? "active-web-btn" : "inactive-web-btn"}`}
                                onClick={() => setSelectedProject(project)}
                            >
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="projects-section">
                    <h4>{selectedProject.title}</h4>
                    <p>{selectedProject.description}</p>
                    <a href={selectedProject.link} target="_blank">
                        <img src={selectedProject.image} alt={selectedProject.title} />
                    </a>
            </section>
        </div>
    )
}

export default Web