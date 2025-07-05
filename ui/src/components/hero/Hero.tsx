import React from 'react';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <img 
          src="/tamasbartos.jpg" 
          alt="Tamas Bartos" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Tamás Bartos</h1>
          <p className="hero-subtitle">Software Engineer & Cloud Architect</p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 