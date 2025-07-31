import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CVPage.css';
import { contactContent } from '../../content/contact';
import { aboutContent } from '../../content/about';
import { skillsContent } from '../../content/skills';
import { experienceContent } from '../../content/experience';
import { educationContent } from '../../content/education';
import { FaEnvelope, FaGlobe, FaLightbulb, FaUsers, FaCrown, FaPhone, FaTrophy } from 'react-icons/fa';
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
                            <a
                                href={`https://${contactContent.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-link"
                            >
                                {contactContent.website}
                            </a>
                        </div>
                    </div>
                    <div className="header-section">
                        <div className="header-icon">
                            <SiLinkedin />
                        </div>
                        <div className="header-text">
                            <a
                                href={`https://${contactContent.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-link"
                            >
                                Tamás Bartos
                            </a>
                        </div>
                    </div>
                    <div className="header-section">
                        <div className="header-icon">
                            <FaPhone />
                        </div>
                        <div className="header-text">
                            <span className="header-link">{contactContent.phone}</span>
                        </div>
                    </div>
                </div>

                <div className="spacer-line"></div>

                {/* Two-column layout */}
                <div className="cv-two-column">
                    <div className="cv-left-column">
                        {/* Profile picture */}
                        <div className="profile-picture-container">
                            <img src="/tamasbartos-pdf.jpg" alt="Tamás Bartos" className="profile-picture" />
                        </div>

                        {/* Name */}
                        <div className="profile-name">TAMÁS BARTOS</div>

                        {/* Summary Section */}
                        <div className="summary-section">
                            <h3 className="summary-header">SUMMARY</h3>
                            <p className="summary-text">{aboutContent.description}</p>
                        </div>

                        {/* Skills Section */}
                        <div className="skills-section">
                            <h3 className="skills-header">SKILLS</h3>
                            {(() => {
                                const skillsByCategory = skillsContent.skills.reduce(
                                    (acc, skill) => {
                                        if (!acc[skill.category]) {
                                            acc[skill.category] = [];
                                        }
                                        acc[skill.category].push(skill.name);
                                        return acc;
                                    },
                                    {} as Record<string, string[]>,
                                );

                                const categories = Object.entries(skillsByCategory);
                                const infrastructureIndex = categories.findIndex(([category]) => category === 'Infrastructure');

                                // Render categories before Infrastructure (including Database)
                                const beforeInfrastructure = categories.slice(0, infrastructureIndex);
                                const afterInfrastructure = categories.slice(infrastructureIndex);

                                return (
                                    <>
                                        {beforeInfrastructure.map(([category, skills]) => (
                                            <div key={category} className="skill-category">
                                                <h4 className="skill-category-title">{category}</h4>
                                                <div className="skills-list">
                                                    {skills.map((skillName, index) => (
                                                        <span key={index} className="skill-item">
                                                            {skillName}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}

                                        <div className="cv-margin-left"></div>

                                        {afterInfrastructure.map(([category, skills]) => (
                                            <div key={category} className="skill-category">
                                                <h4 className="skill-category-title">{category}</h4>
                                                <div className="skills-list">
                                                    {skills.map((skillName, index) => (
                                                        <span key={index} className="skill-item">
                                                            {skillName}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                );
                            })()}
                        </div>

                        {/* Strengths Section */}
                        <div className="strengths-section">
                            <h3 className="strengths-header">STRENGTHS</h3>
                            <div className="strengths-list">
                                <div className="strength-item">
                                    <FaLightbulb className="strength-icon" />
                                    <span>Problem-solving</span>
                                </div>
                                <div className="strength-item">
                                    <FaUsers className="strength-icon" />
                                    <span>Team collaboration</span>
                                </div>
                                <div className="strength-item">
                                    <FaCrown className="strength-icon" />
                                    <span>Leadership</span>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="cv-education-section">
                            <h3 className="cv-education-header">EDUCATION</h3>
                            {educationContent.education.map((edu, index) => (
                                <div key={index} className="cv-education-item">
                                    <h4 className="cv-education-title">{edu.degree}</h4>
                                    <p className="cv-education-institution">{edu.institution}</p>
                                    <p className="cv-education-period">{edu.period}</p>
                                </div>
                            ))}
                        </div>

                        {/* Left column content - 43% width, header blue */}
                    </div>
                    <div className="cv-right-column">
                        {/* Work Experience Section */}
                        <div className="experience-section">
                            <h3 className="experience-header">WORK EXPERIENCE</h3>

                            {/* First 2 experience items */}
                            {experienceContent.experiences.slice(0, 2).map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <h4 className="experience-title">{exp.title}</h4>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-period">{exp.period}</p>
                                    <ul className="experience-tasks">
                                        {exp.description.map((task, taskIndex) => (
                                            <li key={taskIndex}>{task}</li>
                                        ))}
                                    </ul>
                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div className="cv-achievements-section">
                                            <h5 className="cv-achievements-header">
                                                <FaTrophy className="cv-achievement-icon" />
                                                Key Achievements
                                            </h5>
                                            <ul className="cv-achievements-list">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="cv-achievement-item">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="cv-margin-right"></div>

                            {/* Remaining experience items (3rd onwards) */}
                            {experienceContent.experiences.slice(2).map((exp, index) => (
                                <div key={index + 2} className="experience-item">
                                    <h4 className="experience-title">{exp.title}</h4>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-period">{exp.period}</p>
                                    <ul className="experience-tasks">
                                        {exp.description.map((task, taskIndex) => (
                                            <li key={taskIndex}>{task}</li>
                                        ))}
                                    </ul>
                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div className="cv-achievements-section">
                                            <h5 className="cv-achievements-header">
                                                <FaTrophy className="cv-achievement-icon" />
                                                Key Achievements
                                            </h5>
                                            <ul className="cv-achievements-list">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="cv-achievement-item">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content will be added here */}
            </div>
        </div>
    );
};

export default CVPage;
