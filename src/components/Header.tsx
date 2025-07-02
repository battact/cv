import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-profile">
            <div className="header-text">
              <h1 className="name">TAMÁS BARTOS</h1>
              <h2 className="title">Senior Software Engineer</h2>
              <p className="subtitle">8+ years of experience in software development</p>
            </div>
          </div>
          <nav className="header-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="/tamas_bartos_cv.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 