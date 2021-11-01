import React from 'react';
import personalProjects from "../Assets/Data/Personal_Projects.js"

function Projects({asideText}) {
    const featuredProjects = personalProjects.filter(project => project.isFeatured);
    const otherProjects = personalProjects.filter(project => !project.isFeatured);

    return (
        <div>
        <section id="featured-projects">
            <div className="container">
                <aside># {asideText}</aside>
                <h2 className={"title"}>Featured Projects</h2>
            </div>
        </section>
        <section id="projects">
            <div className="container">
                <h2 className={"title"}>Other Projects</h2>
            </div>
        </section>
        </div>
    );
}

export default Projects;