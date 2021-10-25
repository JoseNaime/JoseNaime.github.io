import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import educationData from '../Assets/Data/Experience/Education'
import workData from '../Assets/Data/Experience/Work'
import remarkGfm from 'remark-gfm'

function Experience() {
    const [experienceSection, setExperienceSection] = useState("education");
    const [activeEducationSection, setActiveEducationSection] = useState(educationData[0]);
    const [activeWorkSection, setActiveWorkSection] = useState(workData[0]);

    const handleExperienceSectionClick = (ev) => {
        const clickedSection = ev.target.value;
        if (experienceSection === clickedSection) return 0;
        setExperienceSection(clickedSection)
    }

    const educationTitles = educationData.map(el => {
        el.active = (el === activeEducationSection)
        return (
            <li className={el.active ? "active" : ""}><h3 onClick={() => setActiveEducationSection(el)}>{el.title}</h3></li>)
    })

    const workTitles = workData.map(el => {
        el.active = (el === activeWorkSection)
        return (
            <li className={el.active ? "active" : ""}><h3 onClick={() => setActiveWorkSection(el)}>{el.title}</h3></li>)
    })

    return (
        <div id="experience">
            <div className={"options"}>
                <button className={experienceSection === "education" ? "active" : ""}
                        onClick={ev => handleExperienceSectionClick(ev)} value="education">Education
                </button>
                <button className={experienceSection === "work" ? "active" : ""}
                        onClick={ev => handleExperienceSectionClick(ev)} value="work">Work
                </button>
            </div>
            <hr/>
            <div className={"container"}>
                <ul>
                    {(experienceSection === "education") ? educationTitles : workTitles}
                </ul>
                <ReactMarkdown className={"markdown"}
                               children={(experienceSection === "education") ? activeEducationSection.markdown : activeWorkSection.markdown}
                               remarkPlugins={[remarkGfm]}/>
            </div>

        </div>
    );
}

export default Experience;