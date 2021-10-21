import React from 'react';
import {ReactComponent as DownArrow} from './../Assets/Icons/keyboard-arrow-down-24px.svg';
import SocialMedias from "./SocialMedias";


function Landpage({asideText}) {
    return (
        <header id="home">
            <div className="container">
                <aside># {asideText}</aside>
                <div className={"title"}>
                    <h1>Welcome!<br/>I’m Jose Naime</h1>
                    <SocialMedias/>
                </div>
                <h2>Software Engineer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum augue hendrerit lacus condimentum
                    aenean lectus cras diam. Orci, libero amet id amet. Sociis faucibus id pharetra aliquet.</p>
            </div>
            <div id="scroll-down">
                <h6>Scroll Down</h6>
                <DownArrow width="40px" height="40px"/>
            </div>
        </header>
    );
}

export default Landpage;