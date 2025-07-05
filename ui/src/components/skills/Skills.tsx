import React from 'react';
import './skills.css';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiAmazon,
    SiDocker,
    SiGitlab,
    SiPostgresql,
    SiJira,
    SiApachekafka,
    SiGraphql,
    SiGrafana,
    SiDatadog,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { GiCube } from 'react-icons/gi';
import { TbDatabase, TbRefresh } from 'react-icons/tb';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SkillIcon {
    name: string;
    icon: React.ReactNode;
    category: string;
}

const Skills: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    });

    const skills: SkillIcon[] = [
        // Programming Languages & Runtime (ordered by experience)
        { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend' },
        { name: 'JavaScript', icon: <SiJavascript />, category: 'Language' },
        { name: 'TypeScript', icon: <SiTypescript />, category: 'Language' },
        { name: 'Python', icon: <SiPython />, category: 'Language' },

        // Frontend
        { name: 'GraphQL', icon: <SiGraphql />, category: 'Backend' },
        { name: 'React', icon: <SiReact />, category: 'Frontend' },
        { name: 'HTML5', icon: <SiHtml5 />, category: 'Frontend' },
        { name: 'CSS3', icon: <SiCss3 />, category: 'Frontend' },

        // Cloud & AWS Services
        { name: 'AWS', icon: <SiAmazon />, category: 'Cloud' },
        { name: 'CDK', icon: <GiCube />, category: 'Cloud' },
        { name: 'DynamoDB', icon: <TbDatabase />, category: 'Cloud' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Database' },
        { name: 'MongoDB', icon: <FaDatabase />, category: 'Database' },

        // Architecture & Infrastructure
        { name: 'Apache Kafka', icon: <SiApachekafka />, category: 'Architecture' },
        { name: 'Docker', icon: <SiDocker />, category: 'Infrastructure' },
        { name: 'GitLab CI/CD', icon: <SiGitlab />, category: 'Infrastructure' },

        // Development Practices
        { name: 'Agile', icon: <TbRefresh />, category: 'Practices' },
        { name: 'Jira', icon: <SiJira />, category: 'Practices' },
        { name: 'Grafana', icon: <SiGrafana />, category: 'Monitoring' },
        { name: 'Datadog', icon: <SiDatadog />, category: 'Monitoring' },
    ];

    return (
        <section id="skills" className="section" ref={ref}>
            <div className={`section-content ${isIntersecting ? 'fade-in visible' : 'fade-in'}`}>
                <div className="section-header">
                    <h2>Skills & Technologies</h2>
                    <p>Comprehensive expertise in modern development technologies and methodologies</p>
                </div>
                <div className="skills-icons-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`skill-icon-item scale-in ${isIntersecting ? 'visible' : ''}`}
                            style={
                                {
                                    animationDelay: `${index * 0.1}s`,
                                } as React.CSSProperties
                            }
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
