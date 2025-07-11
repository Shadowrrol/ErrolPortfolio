import React from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: 'CSDRMS',
    description: 'Centralized Student Daily Record Management System for CIT-U Junior High School.',
    images: ['/JHS (1).png', '/JHS (2).png'],
    contributions: [
      'Led the frontend development using ReactJS',
      'Collaborated on backend APIs using Spring Boot',
      'Implemented responsive UI and dynamic components',
      'Managed deployment and cloud integration',
      'Worked closely with stakeholders to gather feedback and iterate',
    ],
    github: 'https://github.com/BrittMichaels/React-CSDRMS',
    githubback: 'https://github.com/Juspher123/Spring-CSDRMS',
    live: 'https://jhs-success-hub.vercel.app/',
  },
  {
    title: 'Aniranker',
    description: 'Anime review and ranking platform with voting and discussion features.',
    images: ['/aniranker (1).png', '/aniranker (2).png'],
    contributions: [
      'Built UI components for anime ranking and reviews',
      'Implemented voting logic and user authentication flow',
      'Designed a user-friendly interface for discovering trending anime',
    ],
    drive: 'https://drive.google.com/your-aniranker-demo',
  },
  {
    title: 'CampusEats',
    description: 'Pre-order cafeteria system to reduce wait times and streamline service.',
    images: ['/camps1.png', '/camps2.png'],
    contributions: [
      'Developed a React frontend for menu browsing and pre-ordering',
      'Integrated backend endpoints for real-time order processing',
      'Contributed to user role logic for students and admins',
    ],
    github: 'https://github.com/your/campuseats',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section fadeIn">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Image Gallery */}
            <div className="project-images">
              {project.images.map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`${project.title} Screenshot ${imgIndex + 1}`}
                  className="project-image"
                />
              ))}
            </div>

            {/* Contribution Bullets */}
            <ul className="project-list">
              {project.contributions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Conditional Links */}
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Frontend GitHub
                </a>
              )}
              {project.githubback && (
                <a href={project.githubback} target="_blank" rel="noreferrer">
                  Backend GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.drive && (
                <a href={project.drive} target="_blank" rel="noreferrer">
                  Google Drive Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
