import React from 'react';
import './education.css';
import { educationContent } from '../../content/education';

const Education: React.FC = () => {
    return (
        <section id="education" className="section">
            <div className="section-content">
                <div className="education-list">
                    {educationContent.education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div className="education-header">
                                <h3 className="degree">{edu.degree}</h3>
                                <div className="education-meta">
                                    <span className="institution">{edu.institution}</span>
                                    <span className="period">{edu.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-header">
                    <h2>Education</h2>
                    <p>Strong academic foundation in computer science and software engineering</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
