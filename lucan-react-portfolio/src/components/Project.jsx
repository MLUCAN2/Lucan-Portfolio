import React from "react";

const Project = () => (
    <section className="projects">
        <card className="Meal-Prep">
            <img src='./img/Meal-Plan.png' alt='meal-plan-site'/>
            <h3>Meal-Prep</h3>
            <a href={`https://devunte.github.io/Meal-Plan/`} target="_blank" rel="noopener norefferer">The App</a>
            <a href={`https://github.com/Devunte/Meal-Plan.git`} target="_blank" rel="noopener norefferer">Git Repo</a>
        </card>
    </section>
);

export default Project;

