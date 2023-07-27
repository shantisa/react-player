import React from "react";
import "../styles/VideoStyle.scss"
import VideoButton from "./VideoButton";
import VideoPlayerViewModel from "../ViewModel/VideoPlayerViewModel";
import VideoTime from "./VideoTime";
import VolumeSlider from "./VolumeSlider";
import SoundWave from "./SoundWave";
export default function VideoPlayer(props){
    const viewModel = VideoPlayerViewModel();
    return(
        <React.Fragment key={props.videoSource}>
            <div className="vidContainer"
                 onMouseEnter={() => viewModel.setShowControls(true)}
                 onMouseLeave={() => viewModel.setShowControls(false)}
            >
                <video ref={viewModel.videoRef} crossorigin="anonymous"  id="videoLink" width="854" onTimeUpdate={e => viewModel.updateTime(e.currentTarget.currentTime)}
                       onLoadedData={viewModel.resetPlayer} >
                    <source id="videoSource" src={props.videoSource} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {viewModel.showControls ? <VideoButton onClick={viewModel.playPause} isPlaying={viewModel.isPlaying} /> : ""}
                {viewModel.showControls ? <VideoTime videoTime={viewModel.videoTime} /> : ""}
                {viewModel.showControls ? <VolumeSlider max_vol={viewModel.MAX_VOLUME} volume={viewModel.volume} changeVolume={viewModel.changeVolume} /> : ""}
                <SoundWave ref={viewModel.canvasWave} />
            </div>
        </React.Fragment>
    );
}