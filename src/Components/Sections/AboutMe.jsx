import React from 'react';
import Emoji from '../Emoji'
import portfolioImage from '../../Assets/Images/Web_Face_JN.jpg'
import Experience from '../Experience'

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
                        <p>As an <b>indie game developer</b> in 2015, I created two mobile games and a PC title, leading to a
                           project leadership role in developing a robotics simulator at school.<br /><br />
                           My <b>web development journey</b>, enriched by freelancing and personal projects, earned
                           me a <b>Full Stack Developer certificate from MIT xPRO</b>. This foundation paved my way
                           into <b>Salesforce</b>, where I secured an internship, gained certifications, and now
                           contribute significantly at <b>AstraZeneca</b> as a Salesforce Support Engineer.<br /><br />
                           While my professional journey in <b>cybersecurity</b> is just beginning, my passion is
                           evident, with studies at the <b>University of Technology Sydney</b> and plans for a
                           master's in this field.
                        </p>

                    </div>
                    <div>

                    </div>
                </div>

                <Experience />
            </div>

        </section>
    );
}

export default AboutMe;