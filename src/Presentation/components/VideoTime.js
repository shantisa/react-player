import React from "react";
import "../styles/TimestampStyle.scss"
export default function VideoTime(props){
    return(
        <div className="timeContainer">
            <span id="currentTime">{props.videoTime}</span>
        </div>
    );
}