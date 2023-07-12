import React from "react";
import "../styles/ButtonStyle.scss"
import play_btn from "../../resources/icons/play_button.svg"
import pause_btn from "../../resources/icons/pause_button.svg"

export default function VideoButton(props){
    return(
        <div className="btnContainer">
            <button type="button" className="btn btn_play_pause" onClick={props.onClick}>
                <img src={props.isPlaying ? pause_btn : play_btn} id="img_play_pause" alt="Button"/>
            </button>
        </div>
    );
}