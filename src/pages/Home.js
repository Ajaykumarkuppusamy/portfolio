import React from 'react';
import { FaMouse } from 'react-icons/fa';
import Typewriter from '../components/Typewriter';

const Home = () => {
  return (
    <div className="home-section d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="mb-3 text-bold protest-revolution-regular" >I am </h1>
        <Typewriter />
        <h1 className="mb-4 orbitron">Software Developer / Student</h1>
        <h2 className="intro-text mb-5 inconsolata">
          As an ECE Engineer, I am seeking to kick-start my career
          in a dynamic organization where I can utilize my technical and management skills to contribute to both my personal and professional growth, as well as the growth of
          the company. I am eager to engage in opportunities that
          align with the company’s goals and further its success </h2>
        
        <a href="#contact" className="btn btn-primary btn-lg">Contact Me</a>
      </div>
      <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="profile Img" />
      <div className="scroll-icon d-none d-lg-block">
        <FaMouse />
      </div>
    </div>
  );
}

export default Home;
