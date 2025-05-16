import React from "react";
import "./About.scss";
import profilePic from "/image/profile-images/profile_pic.jpg";

const About = () => {

    return (
        <div className="about-container">
            <div className="about-header">
                <img className="profile_pic" src={profilePic} alt="profile pic" />
                <div className="about-title">
                    <h2>Freelance Software Developer</h2>
                    <h3>Mihai Bogdan Cristian</h3>
                </div>
            </div>
            <p>
                I’m a freelance software developer with a background in Computer Science and hands-on 
                experience in web, game, and application development. I specialize in React, TypeScript, 
                and RESTful APIs, with additional experience in C++, C#, Python, and Java. My work spans 
                from responsive web applications to 2D games built in Godot, combining thoughtful design 
                with clean, maintainable code.
            </p>
            <p>
                I also have practical experience with cybersecurity principles and secure system configuration, 
                gained through personal projects such as setting up an Elastic SIEM lab for event monitoring 
                and building a secure home surveillance system.
            </p>
            <p>
                Currently working in insurance brokerage, where I have honed strong communication, multitasking, 
                and problem-solving skills—qualities I now leverage in technical and collaborative development settings.
            </p>
            <p>
                I’m passionate about building effective digital solutions and contributing to innovative 
                projects in web, software, and game development.
            </p>
        </div>
    )
}

export default About