import React, { useState, useEffect } from 'react';
const Content = () => {
    // eslint-disable-next-line
    const [url, seturl] = useState(0);
    useEffect(() => {
        fetch('/api/get_image')
            .then(res => res.json())
            .then(data => {
                if (data.url) seturl('data:image/png;base64,' + data.url);
                // console.log('###', data.url);
            });
    })
    return (
        <>
            <div className="outerDropzone">
                <br />
                <div id="dZUpload" className="dropzone">
                    <div className="dz-default dz-message">파일을 업로드 해주세요.</div>
                </div>
            </div>

        </>
    )
}

export default Content;