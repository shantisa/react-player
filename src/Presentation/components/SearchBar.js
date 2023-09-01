import React from "react";
import "../styles/SearchStyle.scss"
import searchIcon from "../../resources/icons/search-svgrepo-com.svg"

/**
 * SearchBar Components
 *
 * This component is responsible for the displaying a search bar that user can interact with
 * by inserting a video URL link and selecting the search button.
 *
 * @param props - Component properties:
 * - videoLink {string} - The current value of the video URL link in the search input
 * - onChange {function} - Function to handle changes in the search input value
 * - onClick {function} - Function to handle the search button click
 */
export default function SearchBar(props){
    return(
        <div className="searchBar">
            <input type="search" className="searchInput" placeholder="Please enter a video url link" value={props.videoLink} onChange={e => props.onChange(e.target.value)} />
            <button className="btn searchBtn" type="button" onClick={props.onClick}><img id="searchImg" src={searchIcon} alt="Search"/></button>
        </div>
    );
}