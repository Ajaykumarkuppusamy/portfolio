import React from 'react';
import Timeline from '../components/Timeline';
import ScrollReveal from '../components/ScrollReveal';

const Experience = () => {
  const experienceData = [
    {
      dateRange: 'Jan 2026 — Present',
      company: 'ITTI Pvt Ltd',
      title: 'Software Engineer',
      client: 'Unilever',
      location: 'Bangalore, India',
      bullets: [
        'Spearheading the Unilever Payroll Management System, processing complex salary structures for 30,000+ employees with zero calculation errors (FinTech Domain).',
        'Refactoring legacy database queries in PostgreSQL to reduce report generation time, directly impacting business operational efficiency.',
        'Designing and implementing new features for the "Dynamic Salary Calculation" module using Spring Boot and Angular.',
        'Ensuring strict code quality standards by managing feature branch workflows and performing rigorous code reviews using Git.',
      ],
    },
    {
      dateRange: 'Feb 2024 — Dec 2025',
      company: 'J3Soft Pvt Ltd',
      title: 'Associate Software Engineer',
      client: 'Unilever via ITTI',
      location: 'Tamil Nadu, India',
      projects: [
        {
          name: 'Unilever Payroll System',
          badge: 'FinTech',
          tech: 'Spring Boot · PostgreSQL · REST API · Angular',
          bullets: [
            'Architected and developed 150+ RESTful APIs using Spring Boot to handle complex payroll logic, user onboarding, and request processing.',
            'Assisted in deployment to staging/production environments, consistently resolving critical UAT issues within 24 hours.',
            'Crafted responsive UI using Angular, implementing Role-Based Access Control (RBAC) that secured data for 30,000+ users.',
          ],
        },
        {
          name: 'Borewell Enterprise Management System',
          badge: 'Architect & Tech Lead',
          tech: 'System Design · Spring Boot · MySQL · RBAC · React',
          bullets: [
            'Solely designed the complete system architecture from scratch — database schema, API layer, service decomposition, and security model.',
            'Engineered an asynchronous report generation engine using Spring Boot, reducing UI latency by 60% when processing high-volume yearly data exports.',
            'Optimized database queries and indexing in MySQL to handle concurrent access from multiple branch offices, maintaining sub-second response times.',
            'Implemented a robust billing module with RBAC, ensuring 100% accuracy in invoice generation and financial audit trails.',
            'Led a team to build and deploy a centralized management suite for borewell operations, focusing on automated billing and data-driven reporting.',
          ],
        },
      ],
    },
    {
      dateRange: '2026',
      company: 'Personal Project',
      title: 'Stock Portfolio Tracker',
      location: 'Bangalore, India',
      projects: [
        {
          name: 'Stock Portfolio Tracker',
          badge: 'Full Stack',
          tech: 'Spring Boot · MySQL · JWT · React · TypeScript',
          link: 'https://portfolio-tracker-springboot-react.onrender.com/',
          bullets: [
            'Built a full-stack personal stock portfolio tracker with Spring Boot (REST API), MySQL (persistence), and React + TypeScript frontend.',
            'Implemented JWT-based authentication ensuring secure user data protection.',
            'Designed comprehensive analytics including trade logging and XIRR calculation, handling 500+ transaction records efficiently.',
            'Integrated live stock prices from a market data API, providing real-time updates on realized/unrealized P&L.',
          ],
        },
      ],
    },
  ];

  return (
    <div className="section experience-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Where I've <span className="accent">worked</span>
          </h2>
        </ScrollReveal>
        <Timeline items={experienceData} />
      </div>
    </div>
  );
};

export default Experience;
