import React, { useState } from 'react';
import './experience.css';
import { experienceContent, ExperienceItem } from '../../content/experience';

interface ExperienceModalProps {
    experience: ExperienceItem;
    isOpen: boolean;
    onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">{experience.title}</h2>
                    <div className="modal-meta">
                        <span className="modal-company">{experience.company}</span>
                        <span className="modal-period">{experience.period}</span>
                    </div>
                </div>

                {/* Technologies */}
                {experience.technologies && (
                    <div className="modal-section">
                        <h3>Technologies & Skills:</h3>
                        <div className="tech-tags">
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Achievements */}
                {experience.achievements && (
                    <div className="modal-section">
                        <h3>Key Achievements:</h3>
                        <ul className="achievements-list">
                            {experience.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="achievement-item">
                                    <span className="achievement-icon">🏆</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Detailed Responsibilities */}
                <div className="modal-section">
                    <h3>Responsibilities & Contributions:</h3>
                    <ul className="job-description">
                        {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMoreClick = (experience: ExperienceItem) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedExperience(null);
    };

    return (
        <section id="experience" className="section">
            <div className="section-content">
                <div className="experience-list">
                    {experienceContent.experiences.map((exp, index) => (
                        <div key={index} className="experience-item-collapsed">
                            <div className="experience-header">
                                <h3 className="job-title">{exp.title}</h3>
                                <div className="job-meta">
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                            </div>

                            {/* Technologies Preview (show all) */}
                            {exp.technologies && (
                                <div className="job-technologies-preview">
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button className="details-button" onClick={() => handleMoreClick(exp)}>
                                Details
                            </button>
                        </div>
                    ))}
                </div>
                <div className="section-header">
                    <h2>Work Experience</h2>
                    <p>8+ years of progressive experience in software development and team leadership</p>
                </div>
            </div>

            {/* Modal */}
            {selectedExperience && (
                <ExperienceModal experience={selectedExperience} isOpen={isModalOpen} onClose={handleCloseModal} />
            )}
        </section>
    );
};

export default Experience;
