import React from 'react';

const badgesLinks = [
    "https://img.shields.io/badge/React-Intermediate-blue",
    "https://img.shields.io/badge/Node-Intermediate-green",
    "https://img.shields.io/badge/JavaScript-Intermediate-yellow",
    "https://img.shields.io/badge/Swift-Basic-orange",
]

function AboutMe({asideText, handleProjectClick}) {
    const badges = badgesLinks.map(badgeLink => {
        return <li><img src={badgeLink} alt={"Badge from " + badgeLink}/></li>
    })

    return (
        <section id="about">
            <div className="container">
                <aside># {asideText}</aside>
                <h2 className={"title"}>About Me</h2>
                <ul className={"badges-list"}>
                    {badges}
                </ul>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum augue hendrerit lacus condimentum
                    aenean lectus cras diam. Orci, libero amet id amet. Sociis faucibus id pharetra aliquet.</p>

                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Real-Time-Bus-Tracker/master/README.md")}>Project
                    1</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Chrome-Extension/master/README.md")}>Project
                    2</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/EasyPlaylist/master/README.md")}>Project
                    3</h3>
            </div>

        </section>
    );
}

export default AboutMe;