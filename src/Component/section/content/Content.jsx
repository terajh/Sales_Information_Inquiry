import React, { useState, useEffect } from 'react';
import './Content.css';
const Content = () => {
    // eslint-disable-next-line
    const [url, seturl] = useState(0);
    useEffect(() => {
        // fetch('/api/get_image')
        //     .then(res => res.json())
        //     .then(data => {
        //         // if (data.url) seturl('data:image/png;base64,' + data.url);
        //         // console.log('###', data.url);
        //     });
    })
    return (
        <>
            <form className="outerDropzone" action="http://localhost:3001/api/get_image" method="post">
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