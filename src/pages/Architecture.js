import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FaServer, FaShieldAlt, FaDatabase, FaCogs, FaFileInvoice, FaChartBar, FaUsers, FaLayerGroup } from 'react-icons/fa';

const Architecture = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const architectureLayers = [
    {
      id: 'client',
      label: 'Client Layer',
      icon: <FaUsers />,
      color: '#6C63FF',
      tech: 'Angular · React · Ant Design',
      description: 'Responsive SPA with Role-Based UI rendering. Component-driven architecture with NgRx/Redux state management for predictable data flow.',
    },
    {
      id: 'api',
      label: 'API Gateway',
      icon: <FaServer />,
      color: '#8B83FF',
      tech: 'Spring Boot · REST · JWT',
      description: 'Centralized API gateway handling authentication, request routing, and rate limiting. RESTful endpoints with Swagger documentation.',
    },
    {
      id: 'services',
      label: 'Service Layer',
      icon: <FaCogs />,
      color: '#6C63FF',
      tech: 'Spring Boot · Microservices',
      description: 'Domain-driven service decomposition — Billing, Reporting, User Management, and Operations modules with clear bounded contexts.',
    },
    {
      id: 'security',
      label: 'Security Layer',
      icon: <FaShieldAlt />,
      color: '#10b981',
      tech: 'Spring Security · RBAC · JWT',
      description: 'Multi-level RBAC with branch-level data isolation. JWT token lifecycle with refresh rotation ensuring zero unauthorized data access.',
    },
    {
      id: 'async',
      label: 'Async Engine',
      icon: <FaChartBar />,
      color: '#f59e0b',
      tech: 'Spring @Async · Thread Pool',
      description: 'Asynchronous report generation engine reducing UI latency by 60%. Handles high-volume yearly data exports without blocking the main thread.',
    },
    {
      id: 'data',
      label: 'Data Layer',
      icon: <FaDatabase />,
      color: '#3b82f6',
      tech: 'MySQL · PostgreSQL · Indexing',
      description: 'Optimized schema design with strategic indexing for concurrent multi-branch access. Sub-second response times under heavy load.',
    },
  ];

  const designPrinciples = [
    {
      icon: <FaLayerGroup />,
      title: 'Separation of Concerns',
      description: 'Clean layered architecture — each module owns its domain logic, data access, and API contracts independently.',
    },
    {
      icon: <FaCogs />,
      title: 'Scalable by Design',
      description: 'Service decomposition enabling horizontal scaling. Stateless API layer with connection pooling for concurrent branch access.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security First',
      description: 'RBAC at every layer — UI components, API endpoints, and database queries all enforce role-based data isolation.',
    },
    {
      icon: <FaFileInvoice />,
      title: 'Data Integrity',
      description: 'Transactional billing with audit trails. Every financial operation is atomic, ensuring 100% accuracy in invoice generation.',
    },
  ];

  const borewellFeatures = [
    { label: 'Automated Billing', detail: 'Multi-branch invoice generation with financial audit trails' },
    { label: 'Async Reporting', detail: '60% latency reduction via background report engine' },
    { label: 'RBAC Security', detail: 'Branch-level data isolation for 100% access control' },
    { label: 'Query Optimization', detail: 'Indexed MySQL queries for sub-second response times' },
    { label: 'API Documentation', detail: 'Full Swagger docs reducing onboarding time by 40%' },
  ];

  return (
    <div className="section architecture-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">System Design</div>
          <h2 className="section-title">
            Architected & <span className="accent">built from scratch</span>
          </h2>
          <p className="architecture-subtitle">
            I designed the complete system architecture for the Borewell Enterprise Management System
            as <strong>Technical Lead</strong> — from database schema to deployment. Here's how I think about
            building scalable systems.
          </p>
        </ScrollReveal>

        {/* Architecture Diagram */}
        <ScrollReveal delay={100}>
          <div className="architecture-diagram">
            <div className="diagram-header">
              <div className="diagram-title">
                <FaCogs className="diagram-icon" />
                <span>Borewell Enterprise System — Architecture Overview</span>
              </div>
              <div className="diagram-badge">Designed & Led by Me</div>
            </div>

            <div className="diagram-layers">
              {architectureLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  className={`diagram-layer ${activeLayer === layer.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  style={{ '--layer-color': layer.color, '--delay': `${index * 80}ms` }}
                >
                  <div className="layer-left">
                    <div className="layer-icon">{layer.icon}</div>
                    <div className="layer-info">
                      <div className="layer-name">{layer.label}</div>
                      <div className="layer-tech">{layer.tech}</div>
                    </div>
                  </div>
                  <div className="layer-description">
                    {layer.description}
                  </div>
                  {index < architectureLayers.length - 1 && (
                    <div className="layer-connector">
                      <div className="connector-line" />
                      <div className="connector-arrow">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="diagram-features">
              <div className="features-title">Key Engineering Outcomes</div>
              <div className="features-grid">
                {borewellFeatures.map((feature, index) => (
                  <div key={index} className="feature-chip">
                    <div className="feature-label">{feature.label}</div>
                    <div className="feature-detail">{feature.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Design Principles */}
        <ScrollReveal delay={200}>
          <div className="principles-header">
            <div className="section-label">Philosophy</div>
            <h3 className="principles-title">How I approach system design</h3>
          </div>
        </ScrollReveal>

        <div className="principles-grid">
          {designPrinciples.map((principle, index) => (
            <ScrollReveal key={index} delay={300 + index * 100}>
              <div className="principle-card">
                <div className="principle-icon">{principle.icon}</div>
                <h4 className="principle-name">{principle.title}</h4>
                <p className="principle-description">{principle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* System Design Interest */}
        <ScrollReveal delay={500}>
          <div className="sd-interest-banner">
            <div className="sd-interest-content">
              <div className="sd-emoji">🏗️</div>
              <div className="sd-text">
                <h4>Passionate about System Design</h4>
                <p>
                  I actively study distributed systems, high-throughput architectures, and scalability patterns.
                  From designing database sharding strategies to optimizing API response times — I love solving
                  the puzzle of making systems that handle millions of operations reliably.
                </p>
              </div>
            </div>
            <div className="sd-topics">
              {['Microservices', 'Load Balancing', 'Database Indexing', 'Caching Strategies', 'API Gateway Patterns', 'CQRS', 'Event-Driven Architecture', 'Rate Limiting'].map((topic, i) => (
                <span key={i} className="sd-topic-tag">{topic}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Architecture;
