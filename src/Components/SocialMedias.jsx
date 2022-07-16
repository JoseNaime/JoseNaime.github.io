import React from 'react';
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SocialMedias() {
    return (
        <div className={"social-medias"}>
            <a href={"https://github.com/JoseNaime"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a href={"https://www.linkedin.com/in/jose-naime"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
            <a href={"https://twitter.com/JoseNaime_DEV"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
        </div>
    );
}

export default SocialMedias;