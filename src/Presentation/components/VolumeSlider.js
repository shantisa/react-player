import React, {useState} from "react";
import "../styles/SliderStyle.scss"
import vol_up from "../../resources/icons/vol_up.svg"
import vol_down from "../../resources/icons/vol_down.svg"
import vol_mute from "../../resources/icons/vol_mute.svg"

/**
 * VolumeSlider Component
 *
 * This component is responsible for displaying the volume slider that users can
 * interact with to change the volume of the video. The volume slider appearance changes
 * based on the current volume number.
 *
 * @param props - Component properties:
 *  - maxVol {number} - The maximum volume of the slider
 *  - volume {number} - The current volume of the slider
 *  - changeVolume {function} - Function to handle the change in volume when user interact with the slider
 */
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
                <img src={vol_icon} id="img_vol" data-testid="vol_image" alt="Button"/>
            </button>
            <input type="range" min="0" max={props.maxVol} defaultValue={props.volume} className="slider"  data-testid="volume_slider" onChange={e => props.changeVolume(e.currentTarget.value) } />
        </div>
    );
}