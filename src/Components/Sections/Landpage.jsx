import React from 'react';
import {ReactComponent as DownArrow} from '../../Assets/Icons/keyboard-arrow-down-24px.svg';
import SocialMedias from "../SocialMedias";

function Landpage({asideText}) {
    return (
        <header id="home">
            <div className="container text-center">
                <aside># {asideText}</aside>
                <div className={"title"}>
                    <h1>JOSE NAIME</h1>

                </div>
                <h6>Salesforce, Web & Cybersecurity</h6>
            </div>
            <div id="scroll-down">
                <h6>Scroll Down</h6>
                <DownArrow width="40px" height="40px" />
            </div>
        </header>
    );
}

export default Landpage;