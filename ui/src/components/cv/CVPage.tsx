import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CVPage.css';
import { contactContent } from '../../content/contact';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const CVPage: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);
    const navigate = useNavigate();

    const handleDownloadPDF = async () => {
        try {
            setIsGenerating(true);
            setIsPrinting(true);

            // Small delay to let React re-render and hide the button
            setTimeout(async () => {
                try {
                    // PDF generation logic will be added later
                    window.print();
                } finally {
                    // Restore button visibility after printing dialog closes
                    setTimeout(() => {
                        setIsPrinting(false);
                    }, 500);
                }
            }, 100);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
            setIsPrinting(false);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleWebViewClick = () => {
        navigate('/');
    };

    return (
        <div className="cv-page">
            {!isPrinting && (
                <header className="cv-header">
                    <div className="cv-header-buttons">
                        <button className="web-view-btn" onClick={handleWebViewClick}>
                            Change to web view
                        </button>
                        <button className="download-pdf-btn" onClick={handleDownloadPDF} disabled={isGenerating}>
                            {isGenerating ? 'Preparing PDF...' : 'Download PDF'}
                        </button>
                    </div>
                </header>
            )}

            <div className="cv-content">
                {/* CV Header */}
                <div className="cv-top-header">
                    <div className="header-section">
                        <div className="header-icon">
                            <FaEnvelope />
                        </div>
                        <div className="header-text">
                            <a href={`mailto:${contactContent.email}`} className="header-link">
                                {contactContent.email}
                            </a>
                        </div>
                    </div>
                    <div className="header-section">
                        <div className="header-icon">
                            <FaGlobe />
                        </div>
                        <div className="header-text">
                            <a href={contactContent.website} target="_blank" rel="noopener noreferrer" className="header-link">
                                tamasbartos.com
                            </a>
                        </div>
                    </div>
                    <div className="header-section">
                        <div className="header-icon">
                            <SiLinkedin />
                        </div>
                        <div className="header-text">
                            <a href={contactContent.linkedin} target="_blank" rel="noopener noreferrer" className="header-link">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content will be added here */}
            </div>
        </div>
    );
};

export default CVPage;
