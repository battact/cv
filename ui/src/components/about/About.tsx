import React from 'react';
import './about.css';

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
            <p className="about-description">
              Results-driven software engineer with 8+ years of experience in software architecture, cloud
              infrastructure, and full-stack development. Adept at designing and delivering scalable microservices
              and event-driven systems using AWS and modern frameworks. Proven leader and mentor with a
              track record of collaborating across international teams and driving projects from concept to
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 