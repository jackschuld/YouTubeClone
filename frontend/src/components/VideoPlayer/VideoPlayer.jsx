const VideoPlayer = ({ selectedVideo }) => {
    if (selectedVideo){        
        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="100%" height="360" src={`https://www.youtube.com/embed/${selectedVideo.id}`} frameBorder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen ></iframe>
                <h2>{selectedVideo.snippet.title}</h2>
                <p>{selectedVideo.snippet.description}</p>
            </div>
            );
        }
    return null
}
 
export default VideoPlayer;