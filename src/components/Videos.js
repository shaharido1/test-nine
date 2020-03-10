import React from "react";
import Video from "./Video";

function Videos() {
    const videos = Array(9).fill(1).map((elm, index) => index);
    return (
        <div className="videosDisplay">
            videos
            {
                videos
                .map(videoId =>
                    <Video key={videoId} videoId={videoId}/>
                )
            }
        </div>
    )
}


export default Videos;
