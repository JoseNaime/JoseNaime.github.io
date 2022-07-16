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
                <p>Started learning <b>web development</b> in 2019, and getting <b>professional experience</b> since 2021, which made me succeed to grow my hard skills and soft skills in different areas.
                    <br/><br/>
                   Mostly experienced with the <b>MERN</b> stack (MongoDB, Express, React & Node), and looking for further experience with those technologies and even to enrich my knowledge with new ones.</p>
            </div>
            <div id="scroll-down">
                <h6>Scroll Down</h6>
                <DownArrow width="40px" height="40px"/>
            </div>
        </header>
    );
}

export default Landpage;