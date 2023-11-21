import React from 'react';
import personalProjects from "../../Assets/Data/Personal_Projects.js"
import FeaturedProject from "../Projects/FeaturedProject";
import Project from "../Projects/Project"

function Projects({asideText, handleProjectClick}) {
    const featuredProjects = personalProjects.filter(project => project.isFeatured);
    const otherProjects = personalProjects.filter(project => !project.isFeatured);

    return (
        <section id={"projects"}>
            <aside># {asideText}</aside>

            <div id="featured-projects">
                <div className="container">
                    <h2 className={"title"}>Featured Projects</h2>


                    {featuredProjects.map((featuredProject, i) => {
                        return <FeaturedProject handleProjectClick={handleProjectClick}
                                                projectInfo={featuredProject}
                                                key={"featuredProject_" + i}
                        />
                    })}
                </div>
            </div>
            <div id="projects">
                <div className="container">
                    <h2 className={"title"}>Other Projects</h2>
                    <div className={"projects-grid"}>
                        {otherProjects.map((project, i) => {
                            return <Project handleProjectClick={handleProjectClick}
                                            projectInfo={project} key={"project_" + i} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;