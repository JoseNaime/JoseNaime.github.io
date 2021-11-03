import React, {useState, useEffect} from 'react';
import scrollValues from './../../Assets/Data/ScrollValues'

function DesktopNav() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState("home")
    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position);
        if (position >= scrollValues.desktop.projects){
            setActiveSection("projects")
        }else if (position >= scrollValues.desktop.about){
            setActiveSection("about")
        }else{
            setActiveSection("home")
        }
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuItemClick = (section) => {
        const positionToScroll = scrollValues.desktop[section];
        window.scrollTo({top: positionToScroll + 50});
    }


    return (
        <nav id={"nav__Desktop"}>
            <ul>
                <li><p onClick={() => handleMenuItemClick("home")} className={(activeSection === "home") ? "active" : ""}># Home</p></li>
                <li><p onClick={() => handleMenuItemClick("about")} className={(activeSection === "about") ? "active" : ""}># About</p></li>
                <li><p onClick={() => handleMenuItemClick("projects")} className={(activeSection === "projects") ? "active" : ""}># Projects</p></li>
            </ul>
        </nav>
    );
}

export default DesktopNav;