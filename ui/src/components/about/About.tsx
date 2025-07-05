import React from 'react';
import './about.css';
import { aboutContent } from '../../content/about';

const About: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="section-content">
                <div className="section-header">
                    <h2>About Me</h2>
                    <p>Passionate software engineer with expertise in modern technologies and scalable solutions</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">{aboutContent.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
