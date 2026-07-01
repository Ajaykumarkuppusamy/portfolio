import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FaNpm, FaGithub, FaExternalLinkAlt, FaClock, FaBolt, FaShieldAlt, FaCode } from 'react-icons/fa';

const OpenSource = () => {
  const [activeTab, setActiveTab] = useState('why');
  const [activeCodeTab, setActiveCodeTab] = useState('react');

  const techStack = ['TypeScript', 'Web APIs', 'Vitest', 'NPM'];

  const bulletPoints = [
    {
      title: 'Lazy Reset Architecture',
      desc: 'Engineered a dynamic architecture that shuts down background polling during critical session zones, significantly reducing CPU overhead.',
      icon: <FaBolt />
    },
    {
      title: 'Memory-Safe & Leak-Free',
      desc: 'Implemented memory-safe global event listeners entirely decoupled from UI change-detection cycles with automatic event unbinding.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Zero Dependencies',
      desc: 'Built in pure TypeScript with zero external dependencies, making it plug-and-play for Angular, React, Vue, and Vanilla JS applications.',
      icon: <FaCode />
    }
  ];

  const zones = [
    {
      id: 1,
      name: 'Zone 1 (Safe)',
      range: '0m — 5m',
      interval: 'Check once at 5m',
      desc: 'Abundant session time. System runs check only once to verify integrity while keeping CPU cycles at absolute zero.',
      color: '#4ade80'
    },
    {
      id: 2,
      name: 'Zone 2 (Warning)',
      range: '5m — 10m',
      interval: 'Check every 2.5m',
      desc: 'Session begins to age. Evaluator checks moderately to capture potential background inactivity.',
      color: '#facc15'
    },
    {
      id: 3,
      name: 'Zone 3 (Urgent)',
      range: '10m — 13m',
      interval: 'Check every 1m',
      desc: 'Approaching critical limit. Evaluation rate is stepped up to guarantee timely warning triggers.',
      color: '#fb923c'
    },
    {
      id: 4,
      name: 'Zone 4 (Critical)',
      range: '13m — 15m',
      interval: 'Lazy Reset (On Activity)',
      desc: 'Loops are completely shutdown. Replaces active polling with a single, idle-state passive listener to save overhead.',
      color: '#f87171'
    }
  ];

  // Helper to render code snippets with styled spans for syntax highlighting
  const renderReactCode = () => (
    <pre className="code-block">
      <code>
        <span className="code-keyword">import</span> {'{ useEffect }'} <span className="code-keyword">from</span> <span className="code-string">'react'</span>;<br />
        <span className="code-keyword">import</span> {'{ AdaptiveSessionManager }'} <span className="code-keyword">from</span> <span className="code-string">'adaptive-session-manager'</span>;<br />
        <br />
        <span className="code-keyword">export function</span> <span className="code-function">useSessionTracker</span>() {'{'}<br />
        &nbsp;&nbsp;<span className="code-function">useEffect</span>(() =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">const</span> manager = <span className="code-keyword">new</span> <span className="code-class">AdaptiveSessionManager</span>({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sessionLengthMs: <span className="code-number">15</span> * <span className="code-number">60</span> * <span className="code-number">1000</span>, <span className="code-comment">{"// 15 mins"}</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onExtendSession: <span className="code-keyword">async</span> () =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">{"// Call API to refresh backend token/JWT"}</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">await</span> api.<span className="code-function">post</span>(<span className="code-string">'/refresh-token'</span>);<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLogout: () =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localStorage.<span className="code-function">clear</span>();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.location.href = <span className="code-string">'/login'</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'});<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;manager.<span className="code-function">start</span>();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> () =&gt; manager.<span className="code-function">stop</span>();<br />
        &nbsp;&nbsp;{'}'}, []);<br />
        {'}'}
      </code>
    </pre>
  );

  const renderAngularCode = () => (
    <pre className="code-block">
      <code>
        <span className="code-keyword">import</span> {'{ Injectable, NgZone }'} <span className="code-keyword">from</span> <span className="code-string">'@angular/core'</span>;<br />
        <span className="code-keyword">import</span> {'{ AdaptiveSessionManager }'} <span className="code-keyword">from</span> <span className="code-string">'adaptive-session-manager'</span>;<br />
        <br />
        <span className="code-keyword">@Injectable</span>({'{'} providedIn: <span className="code-string">'root'</span> {'}'})<br />
        <span className="code-keyword">export class</span> <span className="code-class">SessionTrackingService</span> {'{'}<br />
        &nbsp;&nbsp;<span className="code-keyword">private</span> manager: <span className="code-class">AdaptiveSessionManager</span>;<br />
        <br />
        &nbsp;&nbsp;<span className="code-keyword">constructor</span>(<span className="code-keyword">private</span> ngZone: <span className="code-class">NgZone</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.ngZone.<span className="code-function">runOutsideAngular</span>(() =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.manager = <span className="code-keyword">new</span> <span className="code-class">AdaptiveSessionManager</span>({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sessionLengthMs: <span className="code-number">15</span> * <span className="code-number">60</span> * <span className="code-number">1000</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onExtendSession: () =&gt; <span className="code-keyword">this</span>.<span className="code-function">extendSession</span>(),<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLogout: () =&gt; <span className="code-keyword">this</span>.<span className="code-function">logout</span>()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'});<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.manager.<span className="code-function">start</span>();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'});<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'}
      </code>
    </pre>
  );

  const renderVanillaCode = () => (
    <pre className="code-block">
      <code>
        <span className="code-keyword">import</span> {'{ AdaptiveSessionManager }'} <span className="code-keyword">from</span> <span className="code-string">'adaptive-session-manager'</span>;<br />
        <br />
        <span className="code-keyword">const</span> sessionManager = <span className="code-keyword">new</span> <span className="code-class">AdaptiveSessionManager</span>({'{'}<br />
        &nbsp;&nbsp;sessionLengthMs: <span className="code-number">900000</span>, <span className="code-comment">{"// 15 minutes"}</span><br />
        &nbsp;&nbsp;activityEvents: [<span className="code-string">'click'</span>, <span className="code-string">'scroll'</span>, <span className="code-string">'keypress'</span>],<br />
        &nbsp;&nbsp;onExtendSession: () =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-function">fetch</span>(<span className="code-string">'/api/extend-session'</span>, {'{'} method: <span className="code-string">'POST'</span> {'}'});<br />
        &nbsp;&nbsp;{'}'},<br />
        &nbsp;&nbsp;onLogout: () =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;window.location.href = <span className="code-string">'/logout'</span>;<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'});<br />
        <br />
        sessionManager.<span className="code-function">start</span>();
      </code>
    </pre>
  );

  return (
    <div className="section opensource-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Contributions</div>
          <h2 className="section-title">
            Open Source <span className="accent">Work</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="opensource-card glass-card">
            {/* Top Info Header */}
            <div className="package-header">
              <div className="package-title-area">
                <div className="package-icon-wrapper">
                  <FaNpm className="npm-icon" />
                </div>
                <div className="package-title-meta">
                  <h3 className="package-title">Adaptive Session Manager</h3>
                  <span className="package-badge-main">v1.0.1 • Published NPM Package</span>
                </div>
              </div>
              <div className="package-tech-tags">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Short Description */}
            <p className="package-description">
              A highly optimized, framework-agnostic NPM package for secure frontend session management.
              It implements an evaluator timeline that balances security needs with main-thread processing efficiency.
            </p>

            {/* Tabs Navigation */}
            <div className="opensource-tabs">
              <button
                className={`tab-btn ${activeTab === 'why' ? 'active' : ''}`}
                onClick={() => setActiveTab('why')}
              >
                Why I Built This
              </button>
              <button
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Core Architecture
              </button>
              <button
                className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                Evaluation Timeline
              </button>
              <button
                className={`tab-btn ${activeTab === 'usage' ? 'active' : ''}`}
                onClick={() => setActiveTab('usage')}
              >
                Quick Integration
              </button>
            </div>

            {/* Tab Contents */}
            <div className="tab-content-container">

              {/* WHY TAB */}
              {activeTab === 'why' && (
                <div className="tab-pane why-pane">
                  <div className="motivation-container">
                    <div className="problem-block">
                      <h4 className="motivation-heading">The Problem</h4>
                      <p>
                        Traditional frontend session managers suffer from high CPU consumption and performance degradation.
                        They rely either on heavy polling intervals or on binding constant event listeners (like <code>mousemove</code> or <code>scroll</code>)
                        to the main thread. In modern frameworks like React and Angular, this triggers constant, unnecessary UI change detection and paint cycles,
                        and easily leads to memory leaks if event listeners aren't properly cleaned up.
                      </p>
                    </div>
                    <div className="solution-block">
                      <h4 className="motivation-heading">The Solution</h4>
                      <p>
                        I engineered <strong>Adaptive Session Manager</strong> to completely solve this problem. It introduces a <strong>Dynamic Evaluation Loop</strong>
                        that checks user activity less frequently when session time is abundant and scales up checks dynamically as expiration approaches.
                        To maximize CPU efficiency, the unique <strong>Lazy Reset Architecture</strong> completely shuts down background evaluation during the final critical zone,
                        registering only a single passive listener that lazy-resets on the very next user interaction.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* FEATURES TAB */}
              {activeTab === 'features' && (
                <div className="tab-pane features-pane">
                  <div className="features-highlight-grid">
                    {bulletPoints.map((bp, i) => (
                      <div key={i} className="feature-highlight-card">
                        <div className="fh-icon">{bp.icon}</div>
                        <div className="fh-info">
                          <h4>{bp.title}</h4>
                          <p>{bp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIMELINE TAB */}
              {activeTab === 'timeline' && (
                <div className="tab-pane timeline-pane">
                  <div className="timeline-intro">
                    <p>
                      The manager dynamically adjusts event-listener frequencies based on remaining session time.
                      This prevents unnecessary execution cycles during safe periods and ramps up precision when expiration nears.
                    </p>
                  </div>
                  <div className="visual-timeline-container">
                    <div className="visual-timeline-track">
                      {zones.map((zone) => (
                        <div
                          key={zone.id}
                          className="visual-timeline-segment"
                          style={{ '--segment-color': zone.color }}
                        >
                          <div className="segment-bar">
                            <span className="segment-label-num">Z{zone.id}</span>
                          </div>
                          <div className="segment-details">
                            <div className="segment-title-row">
                              <span className="segment-name">{zone.name}</span>
                              <span className="segment-range">{zone.range}</span>
                            </div>
                            <div className="segment-interval">
                              <FaClock /> {zone.interval}
                            </div>
                            <p className="segment-desc">{zone.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* USAGE TAB */}
              {activeTab === 'usage' && (
                <div className="tab-pane usage-pane">
                  <div className="usage-tabs">
                    <button
                      className={`subtab-btn ${activeCodeTab === 'react' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('react')}
                    >
                      React
                    </button>
                    <button
                      className={`subtab-btn ${activeCodeTab === 'angular' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('angular')}
                    >
                      Angular
                    </button>
                    <button
                      className={`subtab-btn ${activeCodeTab === 'vanilla' ? 'active' : ''}`}
                      onClick={() => setActiveCodeTab('vanilla')}
                    >
                      Vanilla JS
                    </button>
                  </div>
                  <div className="code-viewer-container">
                    <div className="code-viewer-header">
                      <span className="code-filename">
                        {activeCodeTab === 'react' && 'useSessionTracker.ts'}
                        {activeCodeTab === 'angular' && 'session-tracking.service.ts'}
                        {activeCodeTab === 'vanilla' && 'session.js'}
                      </span>
                      <span className="code-lang">TS / JS</span>
                    </div>
                    <div className="code-content">
                      {activeCodeTab === 'react' && renderReactCode()}
                      {activeCodeTab === 'angular' && renderAngularCode()}
                      {activeCodeTab === 'vanilla' && renderVanillaCode()}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Call To Actions */}
            <div className="package-actions">
              <a
                href="https://www.npmjs.com/package/adaptive-session-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom npm-btn"
              >
                <FaNpm /> View on NPM <FaExternalLinkAlt className="external-icon" />
              </a>
              <a
                href="https://github.com/Ajaykumarkuppusamy/adaptive-session-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-custom github-btn"
              >
                <FaGithub /> View Source Code <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default OpenSource;
