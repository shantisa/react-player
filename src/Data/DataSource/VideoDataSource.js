/*
 * The datasource manages the videoURL
 */
export default function VideoDataSource() {

    // Default video URL
    let videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";

    /*
     * Retrieve the current video URL
     */
    function getURL(){
        return videoUrl;
    }

    /*
    * Set a new video URL
    */
    function setUrl(videoLink){
        videoUrl = videoLink;
    }

    return{
        getURL,
        setUrl
    }
}