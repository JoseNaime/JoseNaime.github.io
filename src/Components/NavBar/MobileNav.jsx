import React, {useState, useEffect} from 'react';
import scrollValues from './../../Assets/Data/ScrollValues'
import SocialMedias from "../SocialMedias";
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MobileNav({scrollPosition}) {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        if (scrollPosition >= scrollValues.mobile.projects) {
            setActiveSection("projects")
        } else if (scrollPosition >= scrollValues.mobile.about) {
            setActiveSection("about")
        } else {
            setActiveSection("home")
        }
    }, [scrollPosition])

    const handleMenuItemClick = (section) => {
        const positionToScroll = scrollValues.mobile[section];
        window.scrollTo({top: positionToScroll });
        handleMenuButtonClick();
    }

    const handleMenuButtonClick = () => {
        setMenuIsActive(!menuIsActive);
    }


    return (
        <div id={"nav__Mobile"}>
            <FontAwesomeIcon id={"nav-menu-button"} onClick={handleMenuButtonClick} className={menuIsActive ? " active" : ""} icon={faEllipsisV} />
            <nav id={"nav-menu__Mobile"} className={menuIsActive ? "active" : ""}>
                <div>
                    <ul>
                        <li><p onClick={() => handleMenuItemClick("home")}
                               className={(activeSection === "home") ? "active" : ""}># Home</p></li>
                        <li><p onClick={() => handleMenuItemClick("about")}
                               className={(activeSection === "about") ? "active" : ""}># About</p></li>
                        <li><p onClick={() => handleMenuItemClick("projects")}
                               className={(activeSection === "projects") ? "active" : ""}># Projects</p></li>
                    </ul>

                    <SocialMedias />
                </div>
                <a id={"email__Mobile"} href="mailto:josep.naimeg@gmail.com">josep.naimeg@gmail.com</a>
            </nav>
        </div>
    );
}

export default MobileNav;