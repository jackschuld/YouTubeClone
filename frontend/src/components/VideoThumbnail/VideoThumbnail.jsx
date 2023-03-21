import React from 'react';
import { Link } from 'react-router-dom';
import './VideoThumbnail.css'


const VideoThumbnail = ({ videos }) => {
    
    
    if (videos){
        return ( 
            <div className='thumbnails'>
                {videos.map((video)=>{
                    let { url, width, height } = video.snippet.thumbnails.medium;
                    
                    return(
                        <Link to={`/watch/${video.id.videoId}`} className='thumbnail col-xs-4'>
                            <iframe width={width} height={height} src={url}></iframe>
                            <p>{video.snippet.title}</p>
                        </Link>
                    )
                })}
            </div>
         );
    }
}
 
export default VideoThumbnail;