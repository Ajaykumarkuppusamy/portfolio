import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '150+', label: 'APIs Built' },
    { number: '30K+', label: 'Users Served' },
    { number: '60%', label: 'Latency Reduced' },
    { number: '150+', label: 'LeetCode Problems' },
  ];

  const highlights = [
    'Building high-scale FinTech payroll solutions for Fortune 500 clients like Unilever',
    'Architecting and leading delivery of enterprise resource management suites',
    'Performance optimization driving 30% improvements in production environments',
    'Rapid technology adoption — mastered Angular in two weeks for client delivery',
  ];

  return (
    <div className="section about-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Passionate about building <span className="accent">scalable</span> solutions
          </h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={100}>
            <div className="about-text">
              <p>
                Dynamic Software Development Engineer with 2+ years of experience building
                high-scale enterprise applications using Java, Spring Boot, and React. Proven
                track record of delivering critical FinTech (Payroll) solutions for Fortune 500
                clients like Unilever, specializing in complex business logic and performance
                optimization.
              </p>
              <p>
                Experienced in technical leadership, having architected and led the delivery of
                an enterprise resource management suite. Passionate about solving high-scale
                architectural challenges and driving engineering excellence in product-driven
                environments.
              </p>
              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <FaCheckCircle className="highlight-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
