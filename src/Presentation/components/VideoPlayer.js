import React from "react";
import "../styles/VideoStyle.scss"
import VideoButton from "./VideoButton";
import VideoPlayerViewModel from "../ViewModel/VideoPlayerViewModel";
import VideoTime from "./VideoTime";
import FullScreenButton from "./FullScreenButton";
export default function VideoPlayer(props){
    const viewModel = VideoPlayerViewModel();
    return(
        <React.Fragment key={props.videoSource}>
            <div className="vidContainer"
                 onMouseEnter={() => viewModel.setShowControls(true)}
                 onMouseLeave={() => viewModel.setShowControls(false)}
            >
                <video ref={viewModel.videoRef} id="videoLink" width="854" onTimeUpdate={viewModel.updateTime} onLoadedData={viewModel.resetPlayer}
                       controls={viewModel.isFullScreen} >
                    <source id="videoSource" src={props.videoSource} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {viewModel.showControls ? <VideoButton onClick={viewModel.playPause} isPlaying={viewModel.isPlaying} /> : ""}
                {viewModel.showControls ? <VideoTime videoTime={viewModel.videoTime} /> : ""}
                {viewModel.showControls ? <FullScreenButton onClick={viewModel.toggleFullScreen} /> : ""}
            </div>
        </React.Fragment>
    );
}