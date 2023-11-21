import './App.css';
import React, {useState, useEffect} from "react";
import Landpage from "./Components/Sections/Landpage";
import AboutMe from "./Components/Sections/AboutMe";
import MarkdownPopup from "./Components/MarkdownPopup";
import Projects from "./Components/Sections/Projects";
import Footer from "./Components/Sections/Footer"
import DesktopNav from "./Components/NavBar/DesktopNav";
import MobileNav from "./Components/NavBar/MobileNav";
import SocialMedias from "./Components/SocialMedias";

function App() {
    const [displayMarkdownPopup, setDisplayMarkdownPopup] = useState(false);
    const [markdownLink, setMarkdownLink] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMarkdownPopup = () => {
        setDisplayMarkdownPopup(!displayMarkdownPopup);

    }

    const handleProjectClick = (link) => {
        setMarkdownLink(link);
        document.getElementById("markdown-popup-content").scroll(0, 0)
        toggleMarkdownPopup();
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position);
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <DesktopNav scrollPosition={scrollPosition} />
            <MobileNav scrollPosition={scrollPosition} />
            <div className="wrapper">
                <MarkdownPopup
                    url={markdownLink}
                    displayMarkdownPopup={displayMarkdownPopup}
                    handleClosePopupClick={toggleMarkdownPopup} />
                <Landpage asideText={"Home"} />
                <AboutMe asideText={"About"} />
                <Projects asideText={"Projects"} handleProjectClick={handleProjectClick} />
                <Footer/>
            </div>


            <a id={"email__Desktop"} className={"email"} href="mailto:josep.naimeg@gmail.com">josep.naimeg@gmail.com ----</a>
            <div id={"social-medias-float"}>
            <SocialMedias />
            </div>


            <div className={`blur-background ${displayMarkdownPopup ? "" : "hidden"}`} />
            <div id="top-gradient" />
            <div id="bottom-gradient" />
        </div>
    );
}

export default App;
