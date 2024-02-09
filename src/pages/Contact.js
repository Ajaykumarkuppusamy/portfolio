import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(name);
    emailjs.send("service_91ykr8q", "template_jf56353", {
      name: name,
      content: content,
      reply_to: email,
    }, '1BVNBH1k_IN1WTFwk')
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          setMessage('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error);
          setMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="contact-info">
        <h1 className='protest-revolution-regular'>Contact Information</h1>
        <h2 className="inconsolata">Github: <a className="inconsolata" href="https://github.com/Ajaykumarkuppusamy">Ajaykumarkuppusamy</a></h2>
        <h2 className="inconsolata">LinkedIn: <a className="inconsolata" href="https://www.linkedin.com/in/ajay-kumar-k-57a55b228/">Ajay Kumar K</a></h2>
        <h2 className="inconsolata">Email: <a className="inconsolata" href="mailto:ajaykumarkuppusamy@gmail.com">ajaykumarkuppusamy@gmail.com</a></h2>
        <h2 className="inconsolata">Address: 3/58, Dharapuram,<br></br> Tamil Nadu, India</h2>
        <h2 className="inconsolata">Phone: +91 8778098369</h2>
      </div>

      <div className="email-form">
        <h1 className='protest-revolution-regular '>Contact Me</h1>
        <form onSubmit={handleSend}>
          <div className="mb-3 inconsolata">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3 inconsolata">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 inconsolata">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea className="form-control" id="content" rows="3" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <button className="btn btn-primary inconsolata" onClick={handleSend}>Send</button>
          <p className="message ">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
