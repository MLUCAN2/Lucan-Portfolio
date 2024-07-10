import React from 'react';
import Project from '../components/Project';
import mealPlan from '../../img/mealPlan.png';
import devSeeker from '../../img/devSeeker.png';
import kanban from '../../img/kanban.png';
import myReadMe from '../../img/myReadMe.png';
import logoGenerator from '../../img/logoGenerator.png';
import roundAbouts from '../../img/roundAbouts.png';
import weather from '../../img/weather.png';


const Portfolio = () => {
    const projects = [
      {
        title: 'Round-Abouts',
        image: roundAbouts,
        appLink: 'https://round-abouts.onrender.com',
        repoLink: 'https://github.com/MLUCAN2/round-abouts.git'
      },
      {
        title: 'Meal-Plan',
        image: mealPlan,
        appLink: 'https://devunte.github.io/Meal-Plan/',
        repoLink: 'https://github.com/Devunte/Meal-Plan.git'
      },
      {
        title: 'Dev-Seeker',
        image: devSeeker,
        appLink: ' https://tech-portfolio-site.onrender.com/',
        repoLink: 'https://github.com/KyleH-Git/tech-portfolio-site.git'
      },
      {
        title: 'Weather App',
        image: weather,
        appLink:'https://mlucan2.github.io/my-weather-app/',
        repoLink: 'https://github.com/MLUCAN2/my-weather-app'
      },
      {
        title: 'Task Board',
        image: kanban,
        appLink: 'https://mlucan2.github.io/team-todo-board/',
        repoLink: 'https://github.com/MLUCAN2/team-todo-board.git'
      },
      {
        title: 'ReadMe Generator',
        image: myReadMe,
        repoLink: 'https://github.com/MLUCAN2/my-read-me.git'
      },
      {
        title: 'SVG Logo Generator',
        image: logoGenerator,
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

