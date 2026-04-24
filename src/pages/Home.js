import React from 'react';
import Typewriter from '../components/Typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-greeting">{`// Hello, World! I'm`}</div>
          <Typewriter />
          <div className="hero-title">Software Development Engineer</div>
          <div className="hero-location">
            <span>📍</span> Bangalore, India
          </div>
          <div className="hero-actions">
            <a href="#experience" className="btn-primary-custom">
              View My Work
              <span>→</span>
            </a>
            <a
              href={process.env.PUBLIC_URL + '/images/Ajay kumar K.pdf'}
              download="Ajay_Kumar_Kuppusamy_Resume.pdf"
              className="btn-outline-custom"
            >
              <FaDownload /> Resume
            </a>
            <a href="#contact" className="btn-outline-custom">
              Get In Touch
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Ajaykumarkuppusamy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ajay-kumar-kuppusamy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/ajaykumarkaj" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <FaCode />
            </a>
            <a href="mailto:ajaykumarkuppusamy@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/ProfileAjay.jpg'} alt="Ajay" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default Home;
