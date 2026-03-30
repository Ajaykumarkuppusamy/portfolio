import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from '../components/ScrollReveal';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !email || !content) return;

    setIsSending(true);
    emailjs.send("service_91ykr8q", "template_jf56353", {
      name: name,
      content: content,
      reply_to: email,
    }, '8lnUlHoJf4h3sa30L')
      .then(
        (result) => {
          setMessage('Message sent successfully! I\'ll get back to you soon.');
          setMessageType('success');
          setName('');
          setEmail('');
          setContent('');
          setIsSending(false);
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          setMessageType('error');
          setIsSending(false);
        }
      );
  };

  const contactLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Ajaykumarkuppusamy',
      href: 'https://github.com/Ajaykumarkuppusamy',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'ajay-kumar-kuppusamy',
      href: 'https://linkedin.com/in/ajay-kumar-kuppusamy',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ajaykumarkuppusamy@gmail.com',
      href: 'mailto:ajaykumarkuppusamy@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 877-809-8369',
      href: 'tel:+918778098369',
    },
  ];

  return (
    <div className="section contact-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let's <span className="accent">connect</span>
          </h2>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal delay={100}>
            <div className="contact-info">
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a tech conversation. Feel free to reach out through any
                of the channels below or drop me a message!
              </p>
              <div className="contact-links">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link-item"
                  >
                    <div className="link-icon">{link.icon}</div>
                    <div className="link-details">
                      <div className="link-label">{link.label}</div>
                      <div className="link-value">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send me a message</h3>
              <form onSubmit={handleSend}>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project or opportunity..."
                    rows="4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message →'}
                </button>
                {message && (
                  <div className={`form-message ${messageType}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
