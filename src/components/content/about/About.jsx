import React from "react";
import "./About.scss";
import profilePic from "/image/profile-images/profile_pic.jpg";

const About = () => {

    return (
        <div className="about-container">
            <div className="about-header">
                <img className="profile_pic" src={profilePic} alt="profile pic" />
                <div className="about-title">
                    <h2>Aspiring Developer</h2>
                    <h3>Mihai Bogdan Cristian</h3>
                </div>
            </div>
            <p>
                I’m an aspiring web and game developer with both formal training and self-taught experience, 
                eager to transition into a professional role. Currently working as an insurance broker, 
                I’ve gained valuable skills in client communication, problem-solving, and managing 
                complex tasks. Now, I'm excited to pivot into web and game development, where I 
                can apply my technical skills.
            </p>
            <p>
                With a degree in Information Technology and a certificate in frontend development, 
                I’ve gained expertise in languages like C++, C#, Python, Java, and web technologies 
                such as JavaScript, React, and SASS.
            </p>
            <p>
                I’ve completed several challenges on Frontend Mentor, building responsive websites 
                and honing my skills in UI/UX design. I’ve also published a Godot game demo on Itch.io. 
                These projects have sharpened my problem-solving skills and deepened my 
                understanding of game mechanics and frontend development.
            </p>
            <p>
                I thrive in collaborative environments and am excited to contribute to web, software 
                or game development roles. If you’re looking for a motivated and adaptable 
                developer, feel free to reach out!
            </p>
        </div>
    )
}

export default About