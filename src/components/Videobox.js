import React from 'react';
import '../styles/Videobox.css'


const VideoBackground = () => {
    return (
        <div className="video-container">
            <video className="video-background" autoPlay loop muted playsInline>
                <source src="./imagesVideos/8293565-hd_1280_720_30fps.mp4" type="video/mp4" />
                A background video.
            </video>
        </div>
    );
};

export default VideoBackground;