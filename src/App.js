import './App.css';
import Landpage from "./Components/Landpage";
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
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Real-Time-Bus-Tracker/master/README.md")}>Project 1</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/Chrome-Extension/master/README.md")}>Project 2</h3>
                <h3 onClick={() => handleProjectClick("https://raw.githubusercontent.com/JoseNaime/EasyPlaylist/master/README.md")}>Project 3</h3>

            </div>
        </div>
    );
}

export default App;
