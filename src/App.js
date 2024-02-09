import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.scss';
import { FaMouse } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition < window.innerHeight) {
        setActiveSection('home');
      } else if (scrollPosition < window.innerHeight * 2) {
        setActiveSection('skills');
      } else if (scrollPosition < window.innerHeight * 3) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container akaya-telivigala-regular">
          <a className="navbar-brand akaya-telivigala-regular" href="#home">Hello! Just look</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${activeSection === 'home' ? 'active source-code-pro' : ''}`}>
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className={`nav-item ${activeSection === 'skills' ? 'active source-code-pro' : ''}`}>
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className={`nav-item ${activeSection === 'projects' ? 'active source-code-pro' : ''}`}>
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className={`nav-item ${activeSection === 'contact' ? 'active source-code-pro' : ''}`}>
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className={`full-height home-section ${activeSection === 'home' ? 'active' : ''}`}>
        <Home />
      </section>
      <section id="skills" className={`full-height skills-section ${activeSection === 'skills' ? 'active' : ''}`}>
        <Skills />
      </section>
      <section id="projects" className={`full-height projects-section ${activeSection === 'projects' ? 'active' : ''}`}>
        <Projects />
      </section>
      <section id="contact" className={`full-height contact-section ${activeSection === 'contact' ? 'active' : ''}`}>
        <Contact />
      </section>
      <div className="scroll-icon">
        <FaMouse />
      </div>
    </div>
  );
}

export default App;
