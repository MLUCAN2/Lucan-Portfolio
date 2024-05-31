import React from "react";

const Project = ({ title, image, appLink, repoLink }) => (
    <div className="project">
      <div className="project-images">
        <div className="project-card">
          <img src={image} alt={`${title}-site`} className="project-image" />
          <div className="project-overlay">
            <a href={appLink} target="_blank" rel="noopener noreferrer">The App</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">Git Repo</a>
          </div>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );

export default Project;

