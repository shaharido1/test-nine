import React, {useEffect} from "react";
import HLS from 'hls.js';



function Video({videoId}) {
    const videoUrl = 'http://localhost:8080/sl.m3u8';
    const videoLocalUrl = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8';
    const apple = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/3340_vod.m3u8'

    useEffect(() => {
        setTimeout(() => {
            const video = document.getElementById('videoId' + videoId);
            const hls = new HLS();
            hls.loadSource(apple);
            hls.attachMedia(video);
            hls.on(HLS.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }, 5000)
    }, [videoId]);

    return (
        <div>
            video {videoId}
            <video id={'videoId' + videoId}>
            </video>
        </div>
    )
}


export default Video;
