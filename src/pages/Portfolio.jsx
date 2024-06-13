import React from 'react';
import Project from '../components/Project';


const Portfolio = () => {
    const projects = [
      {
        title: 'Meal-Plan',
        image: './img/Meal-Plan.png',
        appLink: 'https://devunte.github.io/Meal-Plan/',
        repoLink: 'https://github.com/Devunte/Meal-Plan.git'
      },
      {
        title: 'Dev-Seeker',
        image: './img/dev-seeker.png',
        appLink: ' https://tech-portfolio-site.onrender.com/',
        repoLink: 'https://github.com/KyleH-Git/tech-portfolio-site.git'
      },
      {
        title: 'Task Board',
        image: './img/kanban.png',
        appLink: 'https://mlucan2.github.io/team-todo-board/',
        repoLink: 'https://github.com/MLUCAN2/team-todo-board.git'
      },
      {
        title: 'ReadMe Generator',
        image: './img/my-read-me.png',
        repoLink: 'https://github.com/MLUCAN2/my-read-me.git'
      },
      {
        title: 'SVG Logo Generator',
        image: './img/logo-generator.png',
        repoLink: 'https://github.com/MLUCAN2/logo-generator.git'
      }
    ];
  
    return (
      <section className="portfolio-grid">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            image={project.image} 
            appLink={project.appLink} 
            repoLink={project.repoLink} 
          />
        ))}
      </section>
    );
  };

export default Portfolio;

