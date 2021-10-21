import React from 'react';
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SocialMedias() {
    return (
        <div className={"social-medias"}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </div>
    );
}

export default SocialMedias;