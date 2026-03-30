import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Computer Science & Engineering',
      institution: 'RVS Technical Campus',
      university: 'Anna University',
      location: 'Coimbatore, Tamil Nadu',
      period: '2020 — 2024',
      highlights: [
        'Specialized in Software Engineering, Database Systems, and Data Structures & Algorithms',
        'Built multiple full-stack projects during academic career',
        'Active participation in coding competitions and hackathons',
      ],
    },
  ];

  return (
    <div className="section education-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Education</div>
          <h2 className="section-title">
            Academic <span className="accent">background</span>
          </h2>
        </ScrollReveal>

        <div className="education-cards">
          {educationData.map((edu, index) => (
            <ScrollReveal key={index} delay={100}>
              <div className="education-card">
                <div className="edu-icon-wrapper">
                  <FaGraduationCap className="edu-main-icon" />
                </div>
                <div className="edu-content">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-field">{edu.field}</div>

                  <div className="edu-details">
                    <div className="edu-detail">
                      <FaUniversity />
                      <span>{edu.institution} — <strong>{edu.university}</strong></span>
                    </div>
                    <div className="edu-detail">
                      <FaMapMarkerAlt />
                      <span>{edu.location}</span>
                    </div>
                    <div className="edu-detail">
                      <FaCalendarAlt />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="edu-highlights">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="edu-highlight">
                        <FaAward className="highlight-star" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
