import './App.css';
import {useState} from "react";
import Landpage from "./Components/Landpage";
import AboutMe from "./Components/AboutMe";
import MarkdownPopup from "./Components/MarkdownPopup";
import ProjectsSection from "./Components/ProjectsSection";
import Footer from "./Components/Footer"
import DesktopNav from "./Components/NavBar/DesktopNav";

function App() {
    const [displayMarkdownPopup, setDisplayMarkdownPopup] = useState(false);
    const [markdownLink, setMarkdownLink] = useState("");

    const toggleMarkdownPopup = () => {
        setDisplayMarkdownPopup(!displayMarkdownPopup);

    }

    const handleProjectClick = (link) => {
        setMarkdownLink(link);
        console.log("Popup oppened")
        document.getElementById("markdown-popup-content").scroll(0, 0)
        toggleMarkdownPopup();
    }

    return (
        <div>
            <div className={`blur-background ${displayMarkdownPopup ? "" : "hidden"}`} />
            <DesktopNav/>
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
            <div id="top-gradient" />
            <div id="bottom-gradient" />
        </div>
    );
}

export default App;
