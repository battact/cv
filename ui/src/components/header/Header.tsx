import React, { useState } from 'react';
import './header.css';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header" role="banner">
            <div className="container">
                <div className="header-content">
                    <div className="header-profile">
                        <div className="header-text">
                            <h1 className="name">TAMÁS BARTOS</h1>
                            <h2 className="title">Senior Software Engineer</h2>
                            <p className="subtitle">8+ years of experience in software development</p>
                        </div>
                    </div>
                    <nav className="header-nav" role="navigation" aria-label="Main navigation">
                        <a href="#about" className="nav-link" aria-label="Go to About section">
                            About
                        </a>
                        <a href="#experience" className="nav-link" aria-label="Go to Experience section">
                            Experience
                        </a>
                        <a href="#skills" className="nav-link" aria-label="Go to Skills section">
                            Skills
                        </a>
                        <a href="#education" className="nav-link" aria-label="Go to Education section">
                            Education
                        </a>
                        <a href="#contact" className="nav-link" aria-label="Go to Contact section">
                            Contact
                        </a>
                    </nav>
                    <div className="header-actions">
                        <a href="#contact" className="btn btn-primary" aria-label="Get in touch">
                            Get in Touch
                        </a>
                        <a
                            href="/tamas_bartos_cv.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download CV (opens in new tab)"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-links">
                        <a href="#about" className="nav-link" aria-label="Go to About section" onClick={closeMobileMenu}>
                            About
                        </a>
                        <a
                            href="#experience"
                            className="nav-link"
                            aria-label="Go to Experience section"
                            onClick={closeMobileMenu}
                        >
                            Experience
                        </a>
                        <a href="#skills" className="nav-link" aria-label="Go to Skills section" onClick={closeMobileMenu}>
                            Skills
                        </a>
                        <a href="#education" className="nav-link" aria-label="Go to Education section" onClick={closeMobileMenu}>
                            Education
                        </a>
                        <a href="#contact" className="nav-link" aria-label="Go to Contact section" onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </div>
                    <div className="mobile-nav-actions">
                        <a href="#contact" className="btn btn-primary" aria-label="Get in touch" onClick={closeMobileMenu}>
                            Get in Touch
                        </a>
                        <a
                            href="/tamas_bartos_cv.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download CV (opens in new tab)"
                            onClick={closeMobileMenu}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
