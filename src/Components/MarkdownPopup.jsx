import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useState} from 'react'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MarkdownPopup({url, handleClosePopupClick, displayMarkdownPopup}) {
    const [file, setFile] = useState("");

    let loading = true;
    fetch(url)
        .then(content => content.text()).then(text => setFile(text)).then(() => loading = false);

    return (
        <div className={`popup-container ${displayMarkdownPopup ? "" : "hidden"}`}>
            <FontAwesomeIcon className="popup-close" icon={faTimesCircle} size={"2x"} onClick={handleClosePopupClick}/>
            { loading ?
            <ReactMarkdown
                className={"markdown"}
                children={file}
                remarkPlugins={[remarkGfm]}/>
                :
                <p>Loading...</p>
            }

        </div>
    );
}

export default MarkdownPopup;