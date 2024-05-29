import React from 'react';
import '../styles/Videobox.css'
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    });
  
    return <video ref={ref} src={src} loop playsInline />;
  }
  
  export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
      <>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoPlayer className='video-container'
          isPlaying={isPlaying}
          src="/imagesVideos/8293565-hd_1280_720_30fps.mp4"
        />
      </>
    );
  }