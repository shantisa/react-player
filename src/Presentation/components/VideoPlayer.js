import React from "react";
import "../styles/VideoStyle.scss"
import ProgressBar from "./ProgressBar"
import VideoButton from "./VideoButton";
import VideoPlayerViewModel from "../ViewModel/VideoPlayerViewModel";
import VideoTime from "./VideoTime";
import VolumeSlider from "./VolumeSlider";

import SoundWave from "./SoundWave";

/**
 * VideoPlayer component
 *
 * This component displays the video player along with its controls,
 * including a progress bar, play/pause button, video time display, volume slider,
 * and sound wave visualization.
 *
 * @param props - Component properties:
 * - videoSource {string} - The URL of the video to be played
 */
export default function VideoPlayer(props) {
    const viewModel = VideoPlayerViewModel();
    return (
        <React.Fragment key={props.videoSource}>
            <div className="vidContainer">
                <video ref={viewModel.videoRef} crossOrigin="anonymous" id="videoLink" width="854"
                       onTimeUpdate={(e) => {
                           viewModel.updateTime(e.currentTarget.currentTime);
                       }}
                       onLoadedData={viewModel.resetPlayer}>
                    <source id="videoSource" src={props.videoSource} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div id="videoControls">
                    <ProgressBar onClick={e => viewModel.handleProgress(e.nativeEvent.offsetX,e.currentTarget.offsetWidth)}
                                 progressWidth={viewModel.progressWidth}/>
                    <VideoButton onClick={viewModel.playPause} isPlaying={viewModel.isPlaying}/>
                    <VideoTime videoTime={viewModel.videoTime} videoDuration={viewModel.videoDuration} />
                    <VolumeSlider maxVol={viewModel.MAX_VOLUME} volume={viewModel.volume}
                                  changeVolume={viewModel.changeVolume}/>
                    <SoundWave ref={viewModel.canvasWave}/>
                </div>
            </div>
        </React.Fragment>
    );
}