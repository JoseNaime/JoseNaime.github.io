import React, {useState} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FeaturedProject({projectInfo, handleProjectClick}) {
    const [mouseIn, setMouseIn] = useState(false);

    const handleOnMouseEnter = () => {
        if (!mouseIn) {
            setMouseIn(true);
        }
    }

    const handleOnMouseOut = () => {
        if (mouseIn) {
            setMouseIn(false);
        }
    }

    const githubLink = <div className={"icon-link"}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <a href={projectInfo.githubURL} target={"_blank"}
           rel="noreferrer"> </a>
    </div>

    const webLink = <div className={"icon-link"}>
        <FontAwesomeIcon icon={faGlobe} size="2x" />
        <a href={projectInfo.websiteURL} target={"_blank"}
           rel="noreferrer"> </a>
    </div>

    return (
        <article className={mouseIn ? "project hide" : "project"}
                 onMouseEnter={handleOnMouseEnter}
                 onMouseLeave={handleOnMouseOut}>
            <div className={mouseIn ? "project__cover hide" : "project__cover"}>
                <div style={{backgroundImage: `url(Images/${projectInfo.image})`}} />
            </div>
            <div className={"project__container"}>
                <header>
                    <div>
                        <h3>{projectInfo.title}</h3>
                        <h6>{projectInfo.date}</h6>
                    </div>
                    <div className={"project__links"}>
                        {projectInfo.githubURL ? githubLink : ""}
                        {projectInfo.websiteURL ? webLink : ""}
                    </div>
                </header>
                <div className={"project__description"}>
                    <p>{projectInfo.description}</p>
                    <p className={"link"}
                       onClick={() => projectInfo.markdownLink ? handleProjectClick(projectInfo.markdownLink) : ""}>Learn
                                                                                                                    More...</p>
                </div>
                <footer>
                    <p>{projectInfo.technologies.join(' - ')}</p>
                </footer>
            </div>

        </article>
    );
}

export default FeaturedProject;