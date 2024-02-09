import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Projects = () => {
  const projectsData = [
    {
      name: 'Todo',
      githubUrl: 'https://github.com/Ajaykumarkuppusamy/ToDoApp',
      hostingUrl: 'https://ajaykumarkuppusamy.github.io/ToDoApp/',
      imageUrl: process.env.PUBLIC_URL + '/images/toDoApp.png' ,
    },
    {
      name: 'zeitgeist clone',
      githubUrl: 'https://github.com/Ajaykumarkuppusamy/zeitgeist',
      hostingUrl: 'https://zeitgeist-three.vercel.app/',
      imageUrl: process.env.PUBLIC_URL + '/images/zeitgeist.png'  ,
    },
    {
      name: 'HomeStay AjAv bnb',
      githubUrl: 'https://github.com/Ajaykumarkuppusamy/airbnb_clone',
      hostingUrl: 'https://airbnb-clone-rouge-beta.vercel.app/',
      imageUrl: process.env.PUBLIC_URL + '/images/HomeStay.png ', 
    },
    {
      name:'BMI calculator',
      githubUrl:'https://github.com/Ajaykumarkuppusamy/BmiCalculator',
      hostingUrl:'https://ajaykumarkuppusamy.github.io/BMICalculator/',
      imageUrl:process.env.PUBLIC_URL + '/images/Bmi.png' ,
    },
    // {
    //   name:'BMI calculator',
    //   githubUrl:'https://github.com/Ajaykumarkuppusamy/BmiCalculator',
    //   hostingUrl:'https://ajaykumarkuppusamy.github.io/BMICalculator/',
    //   imageUrl:'https://via.placeholder.com/400x200',
    // },
  ];

  return (
    <div className="projects-container inconsolata">
      <h2 className="protest-revolution-regular">Projects</h2>
      <Carousel fade>
        {projectsData.map((project, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-90"
              src={project.imageUrl}
              alt={project.name}
            />
            <Carousel.Caption>
              <h5 className='akaya-telivigala-regular'>{project.name}</h5>
              <p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer " className='akaya-telivigala-regular'>GitHub</a>
                {' | '}
                <a href={project.hostingUrl} target="_blank" rel="noopener noreferrer" className='akaya-telivigala-regular'>Hosting</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
