import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FeaturedProject({projectInfo, handleProjectClick}) {
    return (
        <article className={"featured-project"} >
            <div className="project-image" style={{backgroundImage: `url(Images/${projectInfo.image})`}}/>
            <div className={"featured-project__container"}>
                <header>
                    <div>
                        <h2>{projectInfo.title}</h2>
                        <h6>{projectInfo.date}</h6>
                    </div>
                    <div className={"featured-project__links"}>
                        {projectInfo.githubURL ? <a href={projectInfo.githubURL}
                                                    target={"_blank"}
                                                    rel="noreferrer">
                            <FontAwesomeIcon  icon={faGithub} size="2x"/></a> : ""}
                        {projectInfo.websiteURL ? <a href={projectInfo.websiteURL}
                                                     target={"_blank"}
                                                     rel="noreferrer">
                            <FontAwesomeIcon icon={faGlobe} size="2x"/></a> : ""}
                    </div>
                </header>
                <div className={"featured-project__description"}>
                    <p>{projectInfo.description}</p>
                    <p className={"link"} onClick={() => projectInfo.markdownLink ? handleProjectClick(projectInfo.markdownLink) : ""}>Learn More...</p>
                </div>
                <footer>
                    <p>{projectInfo.technologies.join(' - ')}</p>
                </footer>
            </div>

        </article>
    );
}

export default FeaturedProject;