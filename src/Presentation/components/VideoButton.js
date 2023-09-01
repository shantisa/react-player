import React from "react";
import "../styles/ButtonStyle.scss"
import play_btn from "../../resources/icons/play_button.svg"
import pause_btn from "../../resources/icons/pause_button.svg"

/**
 * VideoButton Component
 *
 * This component is responsible for displaying a play/pause button that users can interact with.
 * The button's appearance changes based on the current play/pause state.
 *
 * @param props  - Component properties:
 *  - isPlaying {boolean} - Indicates whether the video is currently playing
 *  - onClick {function} - Function to handle the toggle of play/pause when the button is clicked
 */
export default function VideoButton(props){
    return(
        <div className="btnContainer">
            <button type="button" data-testid="btn_play_pause" className="btn btn_play_pause" onClick={props.onClick}>
                <img src={props.isPlaying ? pause_btn : play_btn} data-testid="img_play_pause" id="img_play_pause" alt="Button"/>
            </button>
        </div>
    );
}