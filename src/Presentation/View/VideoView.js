import React, {useEffect} from "react";
import "../styles/normalize.css";
import "../styles/VideoViewStyle.scss";
import VideoPlayer from "../components/VideoPlayer";
import SearchBar from "../components/SearchBar";
import VideoViewModel from "../ViewModel/VideoViewModel";
export default function VideoView(){

    const viewModel = VideoViewModel();

    return(
        <div className="videoPlayer">
            <h1 id="logo">Video Player</h1>
            <SearchBar videoLink={viewModel.searchURL} onChange={viewModel.setSearchURL} onClick={viewModel.loadVideo} />
            <VideoPlayer videoSource={viewModel.videoURL} />
        </div>
    );
}