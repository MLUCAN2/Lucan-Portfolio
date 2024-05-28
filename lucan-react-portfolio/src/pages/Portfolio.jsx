import React from 'react';
import Project from '../components/Project';

const Portfolio= () => {
    const projects=[
        {
            title: 'Project ex 1',
            image: 'path/to/image1.jpg',
            appLink: 'https://linktoapp1.com',
            repoLink: 'https://github.com/username/repo1'
          },
    ];
    return (
        <section>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
            ))}
        </section>
    );
};

export default Portfolio;

