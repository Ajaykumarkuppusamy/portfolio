import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Architecture from './pages/Architecture';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.scss';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'architecture', label: 'Design' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span className="brand-dot" />
            AK
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {isMobileMenuOpen && (
            <div
              className="mobile-overlay active"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="architecture">
        <Architecture />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            <a href="https://github.com/Ajaykumarkuppusamy" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ajay-kumar-kuppusamy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ajaykumarkuppusamy@gmail.com">Email</a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} <span className="footer-accent">Ajay Kumar Kuppusamy</span>. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
