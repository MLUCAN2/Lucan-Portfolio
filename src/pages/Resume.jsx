import React from "react";
import resume from '../../img/resume.png';

const Resume= ()=> (
    <section className="resume-section">
    <div className="resume-container">
        <img src={resume} alt="My Resume" className="resume-image" />
        <a href='docs/Resume.pdf' className="resume-link" download>Download Resume</a>
    </div>
</section>
);

export default Resume;

// <section className="resume-section">
// <div className="my-resume">
//     <h2>Resume</h2>
//     <a href="docs/Resume.pdf" download>Download Resume</a>
// </div>
// <div className="proficiencies">
//     <h3>My Proficiencies</h3>
//     <ul>
//         <li>UI/UX Design</li>
//         <li>HTML/CSS</li>
//         <li>JavaScript</li>
//         <li>Node.js</li>
//         <li>React.js</li>
//         <li>MySQL</li>
//         <li>Database Management</li>
//     </ul>
// </div>
// </section>