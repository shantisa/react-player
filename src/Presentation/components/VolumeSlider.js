import React, {useState} from "react";
import "../styles/SliderStyle.scss"
import vol_up from "../../resources/icons/vol_up.svg"
import vol_down from "../../resources/icons/vol_down.svg"
import vol_mute from "../../resources/icons/vol_mute.svg"

export default function VolumeSlider(props){
    let vol_icon;
    if(props.volume >= 50){
        vol_icon = vol_up;
    } else if(props.volume < 50 && props.volume >= 1){
        vol_icon = vol_down;
    } else{
        vol_icon = vol_mute;
    }
    return (
        <div className="sliderContainer">
            <button type="button" className="btn btn_vol">
                <img src={vol_icon} id="img_vol" alt="Button"/>
            </button>
            <input type="range" min="0" max={props.max_vol} defaultValue={props.volume} className="slider" onChange={e => props.changeVolume(e.currentTarget.value) } />
        </div>
    );
}