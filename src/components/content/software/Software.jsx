import {useState} from "react";
import groceryApp from "/image/software-images/grocery-list/grocery-list.png";
import "../../../styles/Projects.scss";

const softwares = [
    {
        id: 1,
        title: "Grocery List App",
        description: `A mobile-friendly Progressive Web App (PWA) built with React and TypeScript for 
        fast and reliable offline use. The app lets users switch between English and Romanian, and 
        saves grocery lists directly on their devices using localStorage and localForage.

        Users can create, edit, and delete multiple grocery lists, add items with quantities and units, 
        and check off items as they shop. Once all items are checked, the list is automatically marked 
        complete. Lists can also be shared with others via a link, making collaboration easy.

        Designed to be lightweight and simple, the app offers a smooth experience even with limited internet connection.`,
        image: groceryApp,
        link: "https://raelian.github.io/grocery-list-app"
    },
];

const Software = () => {
    const [selectedSoftware, setSelectedSoftware] = useState(softwares[0]);

    return (
        <div className="projects-container">
            <aside className="projects-btns-container">
                <h3>Software projects</h3>
                <ul>
                    {softwares.map((software) => (
                        <li key = {software.id}>
                            <button
                                className={`software-btn ${selectedSoftware.id === software.id ? "active-software-btn" : "inactive-software-btn"}`}
                                onClick={() => setSelectedSoftware(software)}
                            >
                                {software.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="projects-section">
                    <h4>{selectedSoftware.title}</h4>
                    <p>{selectedSoftware.description}</p>
                    <a href={selectedSoftware.link} target="_blank">
                        <img src={selectedSoftware.image} alt={selectedSoftware.title} />
                    </a>
            </section>
        </div>
    )
}

export default Software;