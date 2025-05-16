import {useState, useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import './Navigation.scss';

const Navigation = () => {
    //Animation values
    const INITIAL_POS_1 = -50;
    const INITIAL_POS_2 = 50;
    const INITIAL_POS_3 = -20;
    const FINAL_POS = 0;
    const ANIMATION_DURATION_1 = 1;
    const ANIMATION_DURATION_2 = .3;

    const DELAY_1 = 2;
    const DELAY_2 = 2.5;
    const DELAY_3 = 3;

    //Get current location
    const location = useLocation();

    //Dropdown btn routes
    const dropdownRoutes = ["/web", "/software", "/game"];

    //Check if the current route matches any of the dropdown routes
    const isDropdownActive = dropdownRoutes.includes(location.pathname);

    //State control for dropwndown buttons in Projects
    const [isDropdownMenuAdded, setDropdownMenu] = useState(false);
    const [animComplete, setAnimComplete] = useState(false);
    let dropdownTimeout = null;
    
    //Track if animation is complete
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimComplete(true);
        }, (ANIMATION_DURATION_1 + DELAY_3) * 1000);

        return () => clearTimeout(timeout);
    }, []);

    //Handle mouse over
    const handleMouseEnter = () => {
        if(!animComplete) return;
        setDropdownMenu(true);
    }

    const handleMouseLeave = () => {
        clearTimeout(dropdownTimeout);
        setDropdownMenu(false);
    }

    //Animation functions for nav btns
    const setBtnAnimationValues = (delay, initial_pos_y, initial_pos_x, final_pos) => ({
        initial: {opacity: 0, y: initial_pos_y, x: initial_pos_x},
        animate: {opacity: 1, y: final_pos, x: final_pos},
        transition: {duration: ANIMATION_DURATION_1, delay: delay}
    })

    //Animation for dropdown fade animaion
    const setDropdownAnimationValuesFade = () => ({
        initial: {opacity: 0, x: INITIAL_POS_3},
        animate: {opacity: 1, x: FINAL_POS},
        exit: {opacity: 0, x: INITIAL_POS_3},
        transition: {duration: ANIMATION_DURATION_2}
    })

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <motion.button 
                        {...setBtnAnimationValues(DELAY_1, FINAL_POS, INITIAL_POS_1, FINAL_POS)} 
                        className="navbar-btn" 
                        style={{ pointerEvents: animComplete ? 'auto' : 'none'}}
                    >
                        <NavLink to="/" className={({isActive}) => isActive ? "btn-link active-nav" : "btn-link inactive-nav"}>About me</NavLink>
                    </motion.button>
                </li>
                <li 
                    className="navbar-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.button
                        {...setBtnAnimationValues(DELAY_2, INITIAL_POS_1, FINAL_POS, FINAL_POS)}
                        className={`navbar-btn dropdown-btn ${isDropdownActive || isDropdownMenuAdded ? "active-nav" : "inactive-nav"}`}
                        style={{ pointerEvents: animComplete ? 'auto' : 'none'}}
                    >
                        <span>Projects</span>
                        <div className="triangle"></div>
                    </motion.button>
                    <AnimatePresence>
                        {isDropdownMenuAdded && (
                            <motion.ul
                                {...(setDropdownAnimationValuesFade())}
                                className="dropdown-menu"
                            >
                                <li><NavLink to="/web" className={({isActive}) => isActive ? "dropdown-btn-link active-drop-link" : "dropdown-btn-link inactive-drop-link"}>Web Development</NavLink></li>
                                <li><NavLink to="/software" className={({isActive}) => isActive ? "dropdown-btn-link active-drop-link" : "dropdown-btn-link inactive-drop-link"}>Software Development</NavLink></li>
                                <li><NavLink to="/game" className={({isActive}) => isActive ? "dropdown-btn-link active-drop-link" : "dropdown-btn-link inactive-drop-link"}>Game Development</NavLink></li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>
                <li className="navbar-item">
                    <motion.button 
                        {...setBtnAnimationValues(DELAY_3, FINAL_POS, INITIAL_POS_2, FINAL_POS)}
                        className="navbar-btn" 
                        style={{ pointerEvents: animComplete ? 'auto' : 'none'}}
                    >
                        <NavLink to="/contact" className={({isActive}) => isActive ? "btn-link active-nav" : "btn-link inactive-nav"}>Contact</NavLink>
                    </motion.button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation