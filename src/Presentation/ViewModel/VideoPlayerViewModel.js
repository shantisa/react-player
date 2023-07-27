import React, {useRef} from "react";
import { useState } from "react";

export default function VideoPlayerViewModel() {
    const DEFAULT_VOLUME = 0.5;
    const MAX_VOLUME = 100;
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setPlaying] =  useState(false);
    const INITIAL_TIME = "00:00";
    const [videoTime, setVideoTime] = useState(INITIAL_TIME);
    const [volume, setVolume] = useState(DEFAULT_VOLUME * MAX_VOLUME);
    const canvasWave = useRef(null);
    const videoRef = useRef(null);

    function playPause(){
      if(isPlaying){
          videoRef.current.pause();
      } else{
          videoRef.current.play();
          initWave();
      }
        setPlaying(!isPlaying);
    }

    function changeVolume(value){
        videoRef.current.volume = value/MAX_VOLUME;
        setVolume(value);
    }
    function updateTime(time){
        let videoTimeStr = "";

        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));

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

    function initWave(){
        const context = new AudioContext();
        const source = context.createMediaElementSource(videoRef.current);
        const analyser = context.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.85;
        const WIDTH = canvasWave.current.width;
        const HEIGHT = canvasWave.current.height;
        const canvas = canvasWave.current.getContext("2d");

        source.connect(analyser);
        analyser.connect(context.destination);
        source.connect(context.destination)

        analyser.fftSize = 32;
        const bufferLength = 6;
        const dataArray = new Uint8Array(bufferLength);

        const draw = function () {
            requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);

            canvas.clearRect(0, 0, WIDTH, HEIGHT);

            let barWidth = (WIDTH / 12);
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                x = i * (WIDTH/bufferLength);
                canvas.fillStyle = 'rgb(255, 255, 255)';
                canvas.fillRect(x, HEIGHT/2 , barWidth, (-barHeight)/4);
                canvas.fillRect(x, HEIGHT/2 , barWidth, barHeight/4);
            }
        };
        draw();
    }
    function resetPlayer(){
        setVideoTime(INITIAL_TIME);
        setPlaying(false);
        videoRef.current.volume = volume/ MAX_VOLUME;
    }

    return{
        showControls,
        setShowControls,
        videoRef,
        canvasWave,
        videoTime,
        isPlaying,
        volume,
        DEFAULT_VOLUME,
        MAX_VOLUME,
        changeVolume,
        updateTime,
        resetPlayer,
        playPause
    }
}