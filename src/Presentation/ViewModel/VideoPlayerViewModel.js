import React, {useRef} from "react";
import { useState } from "react";

/*
 * This view model manages the state and logic related to the video player and its subcomponents
 */
export default function VideoPlayerViewModel() {
    const DEFAULT_VOLUME = 0.5;
    const MAX_VOLUME = 100;
    const [isPlaying, setPlaying] =  useState(false);
    const INITIAL_TIME = "00:00";
    const [videoTime, setVideoTime] = useState(INITIAL_TIME);
    const [videoDuration, setVideoDuration] = useState("");
    const [progressWidth, setProgressWidth] = useState(0);
    const [volume, setVolume] = useState(DEFAULT_VOLUME * MAX_VOLUME);
    const canvasWave = useRef(null);
    const videoRef = useRef(null);
    const [waveInit, setWaveInit] = useState(false);

    /*
     * Allow users to toggle the play/pause button
     */
    function playPause(){
      if(isPlaying){
          videoRef.current.pause();
      } else if(!isPlaying){
          videoRef.current.play();
          initWave();
      }
        setPlaying(!isPlaying);
    }

    /*
     * Function to change the volume of the video
     */
    function changeVolume(value){
        videoRef.current.volume = value/MAX_VOLUME;
        setVolume(value);
    }

    /*
     * Function to format the time in HH:MM:SS format
     * @param time - The video time in seconds that need to
     * be converted into a string
     */
    function formatTime(time){
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
        return videoTimeStr;
    }

    /*
     * Updates the video time and progress
     * @param time - The current video time in seconds
     */
    function updateTime(time){
        setVideoTime(formatTime(time));
        if(time === videoRef.current.duration){
            setPlaying(false);
        }
        setProgressWidth((time/ videoRef.current.duration) * 100);
    }

    /*
    * Function to handle user interaction with the progress bar for seeking playback position.
    * @param x - The horizontal position where the user clicked on the progress bar
    * @param width - The total width of the progress bar
    */
    function handleProgress(x, width){
        const newProgress = (x / width) * videoRef.current.duration;
        videoRef.current.currentTime = newProgress; // Update the video's current playback time to the new position.
    }


    /*
     * Function that initializes the audio waveform visualization when
     * the video is playing
     */
    function initWave(){
        if(waveInit) {
            return
        }
        setWaveInit(true);
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

    /*
     *  Reset the video player to its initial state when loaded
     */
    function resetPlayer(){
        setVideoTime(INITIAL_TIME);
        setPlaying(false);
        videoRef.current.volume = volume/ MAX_VOLUME;
        setWaveInit(false);
        const duration = formatTime(videoRef.current.duration);
        setVideoDuration(duration);
    }

    return{
        videoRef,
        canvasWave,
        videoTime,
        videoDuration,
        progressWidth,
        isPlaying,
        volume,
        DEFAULT_VOLUME,
        MAX_VOLUME,
        handleProgress,
        changeVolume,
        updateTime,
        resetPlayer,
        playPause
    }
}