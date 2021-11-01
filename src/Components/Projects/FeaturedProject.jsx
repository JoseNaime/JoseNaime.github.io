import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FeaturedProject({projectInfo}) {
    return (
        <div className={"featured-project"}>
            <div className={"featured-project__container"}>
                <div>
                    <h2>{projectInfo.title}</h2>
                    <h6>{projectInfo.date}</h6>
                </div>
                <div className={"featured-project__links"}>
                    {projectInfo.githubURL ? <FontAwesomeIcon icon={faGithub} size="2x"/> : ""}
                    {projectInfo.websiteURL ? <FontAwesomeIcon icon={faGlobe} size="2x"/> : ""}
                </div>
            </div>

        </div>
    );
}

export default FeaturedProject;