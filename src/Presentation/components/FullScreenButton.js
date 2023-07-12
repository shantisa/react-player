import React from "react";
import "../styles/FSButtonStyle.scss";
import fs_btn from "../../resources/icons/fs_button.svg"
import fs_exit_btn from "../../resources/icons/fs_exit_button.svg"
export default function FullScreenButton(props){
    return(
        <div className="fsContainer">
            <button type="button" className="btn btn_fs" onClick={props.onClick}>
                <img src={fs_btn} id="img_fullScreen" alt="Your browser does not support fullscreen" />
            </button>
        </div>
    );
}