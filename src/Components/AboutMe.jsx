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
                            <b> MERN</b> stack <b>(MongoDB, Express, React, and Node)</b> and looking forward to learning more about mobile development.
                        </p>
                        <br/>
                        <p><b>Facts about me:</b></p>
                        <ul>
                            <li><p><Emoji symbol="🎧"/> - Music is my way out.</p></li>
                            <li><p><Emoji symbol="🌙"/> - I love space related themes.</p></li>
                            <li><p><Emoji symbol="🔶"/> - Orange is my favorite color.</p></li>
                            <li><p><Emoji symbol="👾"/> - Playing video games with friends is something I enjoy.</p></li>
                            <li><p><Emoji symbol="🕷"/> - I'm not a big fan of insects, and if they fly it's worse...</p></li>
                        </ul>
                    </div>
                    <img src={portfolioImage} alt={"Jose Naime"}/>
                </div>

                <Experience/>



                {/*<h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Real-Time-Bus-Tracker/master/README.md")}>Project
                    1</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Chrome-Extension/master/README.md")}>Project
                    2</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/EasyPlaylist/master/README.md")}>Project
                    3</h3>*/}
            </div>

        </section>
    );
}

export default AboutMe;