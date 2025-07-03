import React from 'react';
import { 
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiHtml5, SiCss3, SiNodedotjs, SiAmazon,
  SiDocker, SiGitlab, SiPostgresql, SiJira, SiApachekafka,
  SiGraphql, SiGrafana, SiDatadog
} from 'react-icons/si';
import { 
  FaDatabase
} from 'react-icons/fa';
import { 
  GiCube
} from 'react-icons/gi';
import { 
  TbDatabase, TbRefresh
} from 'react-icons/tb';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SkillIcon {
  name: string
  icon: React.ReactNode
  color: string
  category: string
}

const Skills: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const skills: SkillIcon[] = [
    // Programming Languages & Runtime (ordered by experience)
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "Backend" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", category: "Language" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", category: "Language" },
    { name: "Python", icon: <SiPython />, color: "#3776ab", category: "Language" },
    
    // Frontend
    { name: "GraphQL", icon: <SiGraphql />, color: "#e535ab", category: "Backend" },
    { name: "React", icon: <SiReact />, color: "#61dafb", category: "Frontend" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26", category: "Frontend" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572b6", category: "Frontend" },
    
    // Cloud & AWS Services
    { name: "AWS", icon: <SiAmazon />, color: "#ff9900", category: "Cloud" },
    { name: "CDK", icon: <GiCube />, color: "#ff9900", category: "Cloud" },
    { name: "DynamoDB", icon: <TbDatabase />, color: "#ff9900", category: "Cloud" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database" },
    { name: "MongoDB", icon: <FaDatabase />, color: "#47a248", category: "Database" },
    
    // Architecture & Infrastructure
    { name: "Apache Kafka", icon: <SiApachekafka />, color: "#231f20", category: "Architecture" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ed", category: "Infrastructure" },
    { name: "GitLab CI/CD", icon: <SiGitlab />, color: "#fc6d26", category: "Infrastructure" },
    
    // Development Practices
    { name: "Agile", icon: <TbRefresh />, color: "#28a745", category: "Practices" },
    { name: "Jira", icon: <SiJira />, color: "#0052cc", category: "Practices" },
    { name: "Grafana", icon: <SiGrafana />, color: "#f46800", category: "Monitoring" },
    { name: "Datadog", icon: <SiDatadog />, color: "#632ba6", category: "Monitoring" }
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
              style={{ 
                '--skill-color': skill.color,
                animationDelay: `${index * 0.1}s`
              } as React.CSSProperties}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 