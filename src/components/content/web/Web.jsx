import React, {useState} from "react";
import './Web.scss';
import rpsImage from "/image/web-images/rps_game/rps_game.png";
import pricingComponent from "/image/web-images/pricing_component/pricing_component.png";
import sunnysideSite from "/image/web-images/sunnyside/sunnyside.png";
import otherProjects from "/image/web-images/landing_pages/landing_pages.png";

const projects = [
    {
        id: 1,
        title: "RPS game",
        description: `A simple Rock-Paper-Scissors game challenge from Frontend Mentor. 
        I enhanced the original design by introducing a toggle between the classic Rock-Paper-Scissors mode 
        and an advanced version that includes Lizard and Spock. Additionally, I implemented score persistence, 
        ensuring that scores remain even after refreshing the browser. The game is also fully responsive, 
        making it playable on both desktop and mobile devices.`,
        image: rpsImage,
        link: "https://raelian.github.io/rock-paper-scissors-master/"
    },
    {
        id: 2,
        title: "Pricing component",
        description: `One of my earliest projects that helped me develop a strong foundation in HTML, CSS, SASS, and JavaScript, laying the groundwork for my growth as a front end developer.`,
        image: pricingComponent,
        link: "https://raelian.github.io/interactive-pricing-component/?input=2"
    },
    {
        id: 3,
        title: "Sunnyside",
        description: `One of my earlisest responsive landing pages with a fully functional navigation bar and integrated social media links.`,
        image: sunnysideSite,
        link: "https://raelian.github.io/sunnyside-agency-landing-page/"
    },
    {
        id: 4,
        title: "Other projects",
        description: `My journey started with Frontend Mentor, where I worked on various landing pages. 
                      These early projects helped me build a solid foundation and refine my skills in 
                      HTML5, CSS3, and JavaScript. Thanks to the supportive community, I also gained 
                      a deeper understanding of key concepts such as web responsiveness, accessibility, 
                      SASS, and methodologies like BEM, which helped enhanced both the structure 
                      and maintainability of my code.`,
        image: otherProjects,
        link: "https://www.frontendmentor.io/profile/Raelian/solutions"
    },
];

const Web = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    return (
        <div className="web-container">
            <aside className="web-btns-container">
                <h3>Web projects</h3>
                <ul>
                    {projects.map((project) => (
                        <li key = {project.id}>
                            <button
                                className={`web-btn ${selectedProject.id === project.id ? "active-web-btn" : "inactive-web-btn"}`}
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