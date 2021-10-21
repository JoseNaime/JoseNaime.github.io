import './App.css';
import Landpage from "./Components/Landpage";
import AboutMe from "./Components/AboutMe";
import MarkdownPopup from "./Components/MarkdownPopup";
import {useState} from "react";

function App() {
    const [displayMarkdownPopup, setDisplayMarkdownPopup] = useState(false);
    const [markdownLink, setMarkdownLink] = useState("");

    const toggleMarkdownPopup = () => {
        setDisplayMarkdownPopup(!displayMarkdownPopup);

    }

    const handleProjectClick = (link) => {
        setMarkdownLink(link);
        console.log("Popup oppened")
        document.getElementById("markdown").scroll(0,0)
        toggleMarkdownPopup();
    }

    return (
        <div>
            <div className={`blur-background ${displayMarkdownPopup ? "" : "hidden"}`}/>
            <div className="wrapper">
                <MarkdownPopup
                    url={markdownLink}
                    displayMarkdownPopup={displayMarkdownPopup}
                    handleClosePopupClick={toggleMarkdownPopup}/>

                <Landpage asideText={"Home"}/>
                <AboutMe asideText={"About"} handleProjectClick={handleProjectClick}/>

            </div>
        </div>
    );
}

export default App;
