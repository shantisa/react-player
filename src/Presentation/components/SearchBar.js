import React from "react";
import "../styles/SearchStyle.scss"
import searchIcon from "../../resources/icons/search-svgrepo-com.svg"
export default function SearchBar(props){
    return(
        <div className="searchBar">
            <input type="search" className="searchInput" placeholder="Please enter a video url link" value={props.videoLink} onChange={e => props.onChange(e.target.value)} />
            <button className="btn searchBtn" type="button" onClick={props.onClick}><img id="searchImg" src={searchIcon} alt="Search"/></button>
        </div>
    );
}