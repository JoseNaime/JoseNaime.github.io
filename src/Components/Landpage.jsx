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
                <p>I am based in Mexico, learning more about web development with the MERN stack and developing new
                    projects while achieving my Computer Software engineer degree. </p>
            </div>
            <div id="scroll-down">
                <h6>Scroll Down</h6>
                <DownArrow width="40px" height="40px"/>
            </div>
        </header>
    );
}

export default Landpage;