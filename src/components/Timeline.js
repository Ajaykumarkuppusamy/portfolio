import React from 'react';
import ScrollReveal from './ScrollReveal';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 150}>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.dateRange}</div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-role">{item.title}</div>
                {item.client && (
                  <div className="timeline-client">Client: {item.client}</div>
                )}
                <div className="timeline-location">📍 {item.location}</div>
              </div>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              {item.projects && item.projects.length > 0 && (
                <div className="timeline-projects">
                  {item.projects.map((project, pIndex) => (
                    <div key={pIndex} className="project-card">
                      <div className="project-name">
                        {project.name}
                        {project.badge && (
                          <span className="project-badge">{project.badge}</span>
                        )}
                      </div>
                      {project.tech && (
                        <div className="project-tech">{project.tech}</div>
                      )}
                      <ul className="project-bullets">
                        {project.bullets.map((bullet, bIndex) => (
                          <li key={bIndex}>{bullet}</li>
                        ))}
                      </ul>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Live →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default Timeline;
