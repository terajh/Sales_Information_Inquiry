import React, { useState, useEffect } from 'react';
import './style.css';
const Content = () => {
    // eslint-disable-next-line
    const [url, seturl] = useState(0);
    useEffect(() => {
        
    })
    return (
        <>
            <form id="dropzone_form" className="outerDropzone well" action="http://localhost:3001/api/get_image" method="post">
                <div className="formfield">
                    <div id="my-dropzone" className="dropzone" name="images">
                    </div>
                </div>
                <button id="btn_confirm" className="display_none"></button>
            </form>
            
        </>
    )
}

export default Content;