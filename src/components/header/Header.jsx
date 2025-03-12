import React from "react";
import {motion} from "framer-motion";
import './Header.scss';

const Header = () => {
    //Animation values
    const INITIAL_Y = -20;
    const FINAL_Y = 0;
    const ANIMATION_DURATION = 1.5;

    //Animation function for fade in text

    const setAnimationValues = (delay) => ({
        initial: {opacity: 0, y: INITIAL_Y},
        animate: {opacity: 1, y: FINAL_Y},
        transition: {duration: ANIMATION_DURATION, delay: delay},
    });

    //Delay timer for each row of text

    const DELAY_1 = 0;
    const DELAY_2 = .5;
    const DELAY_3 = 1;

    return (
        <header className="header">
            <motion.h1 {...setAnimationValues(DELAY_1)}>
                Welcome to my personal portfolio!
            </motion.h1>
            <motion.p {...setAnimationValues(DELAY_2)}>
                My name is Mihai Bogdan Cristian and I am passionate about web, software and game development.
            </motion.p>
            <motion.p {...setAnimationValues(DELAY_3)}>
                Explore my web page and learn more about me!
            </motion.p>
        </header>
    )
}

export default Header;