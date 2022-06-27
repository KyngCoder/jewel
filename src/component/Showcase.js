import React from 'react'
import display from '../assets/display.mp4'
import {BsPauseFill,BsFillPlayFill} from 'react-icons/bs'

const Showcase = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();
    
    return (
      <div className="app__video ">
        <video
        className="w-screen h-screen bg-cover"
          ref={vidRef}
          src={display}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className="app__video-overlay flex justify-center items-center">
          <div
            className="app__video-overlay_circle flex justify-center items-center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    );
}

export default Showcase