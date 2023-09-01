import React from "react";
import "../styles/ProgressStyle.scss"

/**
 * ProgressBar component
 *
 * This component displays a progress bar that users can interact with to seek the video playback position.
 *
 * @param props - Component properties:
 *  - progressWidth {number} - The width of the filled portion of the progress bar as a percentage
 *  - onClick {function} - Function to handle user interaction with the progress bar
 */
export default function ProgressBar(props){
    const progressPercentage = props.progressWidth + "%";
    return(
        <div className="progressContainer" onClick={props.onClick}>
            <div style={{width: progressPercentage}} id="progressFilled"></div>
        </div>
    );
}