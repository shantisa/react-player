export default function VideoDataSource() {
    let videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    function getURL(){
        return videoUrl;
    }

    function setUrl(videoLink){
        videoUrl = videoLink;
    }

    return{
        getURL,
        setUrl
    }
}