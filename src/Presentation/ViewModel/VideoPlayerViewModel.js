import React, {useRef} from "react";
import { useState } from "react";

export default function VideoPlayerViewModel() {
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setPlaying] =  useState(false);
    const INITIAL_TIME = "00:00"
    const [videoTime, setVideoTime] = useState(INITIAL_TIME);
    const videoRef = useRef(null);
    function playPause(){
      if(isPlaying){
          videoRef.current.pause();
      } else{
          videoRef.current.play();
      }
        setPlaying(!isPlaying);
    }

    function updateTime(){
        const TIME = videoRef.current.currentTime;

        let videoTimeStr = "";

        let hours = Math.floor(TIME / 3600);
        let minutes = Math.floor((TIME - (hours * 3600)) / 60);
        let seconds = Math.floor(TIME - (hours * 3600) - (minutes * 60));

        if (hours >= 10) {
            videoTimeStr += hours + ":";
        } else if(hours >= 1){
            videoTimeStr += "0" + hours + ":";
        }
        if(minutes >= 10){
            videoTimeStr += minutes + ":";
        }else{
            videoTimeStr += "0" + minutes + ":";
        }

        if(seconds >= 10){
            videoTimeStr += "" + seconds;
        }else{
            videoTimeStr += "0" + seconds;
        }
        setVideoTime(videoTimeStr);
    }
    function resetPlayer(){
        setVideoTime(INITIAL_TIME);
        setPlaying(false);
    }

    return{
        showControls,
        setShowControls,
        videoRef,
        videoTime,
        isPlaying,
        updateTime,
        resetPlayer,
        playPause
    }
}