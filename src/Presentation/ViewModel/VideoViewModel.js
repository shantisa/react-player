import React from "react";
import { useState } from "react";
import VideoDataSource from "../../Data/DataSource/VideoDataSource"
export default function VideoViewModel() {
    const dataSource = VideoDataSource();
    const [videoURL, setVideoURL] = useState(dataSource.getURL());
    const [searchURL, setSearchURL] = useState("");
    function checkURLValidity(videoUrl){
        try {
            new URL(videoUrl);
            return true;
        } catch (err) {
            return false;
        }
    }

    function loadVideo(){
        let videoURL = searchURL;
        if(checkURLValidity(videoURL)) {
            dataSource.setUrl(videoURL);
            fetchVideoUrl();
        }
    }
    function fetchVideoUrl() {
        setVideoURL(dataSource.getURL);
    }

    return{
        videoURL,
        loadVideo,
        searchURL,
        setSearchURL
    }
}