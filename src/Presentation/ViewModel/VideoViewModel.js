import React from "react";
import { useState } from "react";
import VideoDataSource from "../../Data/DataSource/VideoDataSource"

/*
 * This view model manages the state and logic related to the video view
 */
export default function VideoViewModel() {
    const dataSource = VideoDataSource();
    const [videoURL, setVideoURL] = useState(dataSource.getURL());
    const [searchURL, setSearchURL] = useState("");

    /*
     * Checks the validity of a video URL
     */
    function checkURLValidity(videoUrl){
        try {
            new URL(videoUrl);
            return true;
        } catch (err) {
            return false;
        }
    }

    /*
     * Load a video based on the entered URL and updates
     * the data source URL
     */
    function loadVideo(){
        let videoURL = searchURL;
        if(checkURLValidity(videoURL)) {
            dataSource.setUrl(videoURL);
            fetchVideoUrl();
        }
    }

    /*
     * Fetch the video URL from the data source
     */
    function fetchVideoUrl() {
        setVideoURL(dataSource.getURL);
    }

    return{
        videoURL,
        loadVideo,
        searchURL,
        setSearchURL,
        checkURLValidity
    }
}