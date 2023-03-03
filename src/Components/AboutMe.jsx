import React from 'react';
import Emoji from './Emoji'
import portfolioImage from '../Assets/Images/Web_Face_JN.jpg'
import Experience from './Experience'

/*const badgesLinks = [
    "https://img.shields.io/badge/React-Intermediate-blue",
    "https://img.shields.io/badge/Node-Intermediate-green",
    "https://img.shields.io/badge/JavaScript-Intermediate-yellow",
    "https://img.shields.io/badge/Swift-Basic-orange",
]*/

function AboutMe({asideText, handleProjectClick}) {
    /*const badges = badgesLinks.map(badgeLink => {
        return <li><img src={badgeLink} alt={"Badge from " + badgeLink}/></li>
    })*/

    return (
        <section id="about">
            <div className="container">
                <aside># {asideText}</aside>
                <h2 className={"title"}>About Me</h2>

                {/*<ul className={"badges-list"}>
                    {badges}
                </ul>*/}
                <div className={"info-container"}>
                    <div className="info">
                        <p>Hi! As you may know, my name is Jose Naime, and I'm in love with coding and web development.
                            Everything started in 2018 when I was 16 years old; I had the idea of developing a
                            multiplayer
                            videogame, so I started researching how they worked, and I heard about "backend."
                        </p>
                        <br/>
                        <p>
                            Since then, I've developed multiple projects in my free time, and I keep learning more about
                            web technologies, currently I'm working with the
                            <b> MERN</b> stack <b>(MongoDB, Express, React, and Node)</b> and looking forward to learning more about cybersecurity, to focus in <b>pen-testing.</b>.
                        </p>
                        <br/>
                        <p><b>My passions are:</b></p>
                        <ul>
                            <li><p><Emoji symbol="🎧"/> - Music production.</p></li>
                            <li><p><Emoji symbol="📷"/> - Photography; I enjoy taking and editing photos.</p></li>
                            <li><p><Emoji symbol="🖋️"/> - Writing; Blogging about my experience and knowledge in IT</p></li>
                            <li><p><Emoji symbol="👾"/> - Videogames.</p></li>
                        </ul>
                    </div>
                    <img src={portfolioImage} alt={"Jose Naime"}/>
                </div>

                <Experience/>
            </div>

        </section>
    );
}

export default AboutMe;