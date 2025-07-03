import React from 'react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  description?: string
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "High School",
      institution: "Radnóti Miklós Gimnázium",
      period: "2007 - 2011"
    },
    {
      degree: "Bachelor's Degree in Economic Informatics",
      institution: "University of Szeged",
      period: "2011 - 2017"
    }
  ]

  return (
    <section id="education" className="section">
      <div className="section-content">
        <div className="education-list">
          {education.map((edu, index) => (
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
  )
}

export default Education 