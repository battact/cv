import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const viewPdfButtonName = 'Change to PDF view';
const getInTouchButtonName = 'Get in Touch';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Hook to detect mobile/tablet devices
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024); // Includes tablets
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleCVButtonClick = (e: React.MouseEvent) => {
        if (isMobile) {
            e.preventDefault();
            // Download PDF directly on mobile/tablet
            const link = document.createElement('a');
            link.href = '/tamas_bartos_cv.pdf';
            link.download = 'Tamas_Bartos_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        closeMobileMenu();
    };

    const getButtonText = () => {
        return isMobile ? 'Download PDF' : viewPdfButtonName;
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
                            {getInTouchButtonName}
                        </a>
                        <Link to="/cv" className="btn btn-secondary" aria-label="View CV" onClick={handleCVButtonClick}>
                            {getButtonText()}
                        </Link>
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
                            {getInTouchButtonName}
                        </a>
                        <Link to="/cv" className="btn btn-secondary" aria-label="View CV" onClick={handleCVButtonClick}>
                            {getButtonText()}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
