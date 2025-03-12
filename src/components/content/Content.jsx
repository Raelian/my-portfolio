import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import About from "./about/About";
import "./Content.scss";
import Web from "./web/Web";
//import Software from "./Software";
import Game from "./game/Game";
import Contact from "./contact/Contact";

const Content = () => {

    const setContentAnimationValues = () => ({
        initial: {opacity: 0, y: 1200},
        animate: {opacity: 1, y: 0},
        transition: {duration: 2, delay: 1}
    })

    return (
        <motion.div className="main-container" {...setContentAnimationValues()}>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/web" element={<Web />}/>
                {/*}<Route path="/software" element={<Software />}/>{*/}
                <Route path="/game" element={<Game />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </motion.div>
    )
}

export default Content