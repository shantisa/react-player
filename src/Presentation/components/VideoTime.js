import React from "react";
import "../styles/TimestampStyle.scss"

/**
 * VideoTime Component
 *
 *  This component is responsible for displaying the current time and
 *  total duration of the video.
 *
 * @param props - Component properties:
 * - videoTime {string} - The current time of the video in HH:MM:SS format
 * - videoDuration {string} - The total duration of the video in string format (HH:MM:SS)
 */
export default function VideoTime(props){
    return(
        <div className="timeContainer">
            <time id="currentTime" data-testid="vidTime">{props.videoTime} / {props.videoDuration}</time>
        </div>
    );
}