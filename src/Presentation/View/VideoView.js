import React, {useEffect} from "react";
import "../styles/normalize.css";
import "../styles/VideoViewStyle.scss";
import VideoPlayer from "../components/VideoPlayer";
import SearchBar from "../components/SearchBar";
import VideoViewModel from "../ViewModel/VideoViewModel";

/**
 * VideoView Component
 *
 * This component represents the main view of the video player application.
 * It renders the logo, a search bar, and the video player.
 */
export default function VideoView(){

    // Initialize the view model to manage the state and logic of the view
    const viewModel = VideoViewModel();

    return(
        <main className="videoPlayer">
            <header>
                <h1 id="logo">Video Player</h1>
                <SearchBar videoLink={viewModel.searchURL} onChange={viewModel.setSearchURL} onClick={viewModel.loadVideo} />
            </header>
            <VideoPlayer videoSource={viewModel.videoURL} />
        </main>
    );
}