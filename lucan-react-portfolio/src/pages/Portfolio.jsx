import React from 'react';
import Project from '../components/Project';

const Portfolio= () => {
    const projects=[
        {
            title: 'Meal-Plan',
            image: './img/Meal-Plan.png',
            webLink: 'https://devunte.github.io/Meal-Plan/',
            repoLink: 'https://github.com/Devunte/Meal-Plan.git'
          },
    ];
    return (
        <section>
          {projects.map((project, index) => (
            <Project key={index} title= {project.title} image={project.image} appLink={project.webLink} repoLink={project.repoLink}/>
          ))}
        </section>
    );
};

export default Portfolio;

