import './App.css';
import {useState, useEffect} from "react";
import Landpage from "./Components/Landpage";
import AboutMe from "./Components/AboutMe";
import MarkdownPopup from "./Components/MarkdownPopup";
import ProjectsSection from "./Components/ProjectsSection";
import Footer from "./Components/Footer"
import DesktopNav from "./Components/NavBar/DesktopNav";
import MobileNav from "./Components/NavBar/MobileNav";

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
                <ProjectsSection asideText={"Projects"} handleProjectClick={handleProjectClick} />
                <Footer/>
            </div>

            <a id={"email__Desktop"} className={"email"} href="mailto:josep.naimeg@gmail.com">josep.naimeg@gmail.com
                                                                                              ----</a>

            <div className={`blur-background ${displayMarkdownPopup ? "" : "hidden"}`} />
            <div id="top-gradient" />
            <div id="bottom-gradient" />
        </div>
    );
}

export default App;
