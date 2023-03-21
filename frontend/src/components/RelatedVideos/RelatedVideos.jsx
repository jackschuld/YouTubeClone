import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RelatedVideos.css'


const RelatedVideos = ({ videoId }) => {


    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        getRelatedVideos();
      }, [videoId])
    
    async function getRelatedVideos() {
        let url = `https://www.googleapis.com/youtube/v3/search?maxResults=8&type=video&part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyBWX8kjBe9QA7018GxCstMEA3sKaAkr0zM`
        let response = await axios.get(url);
        setRelatedVideos(response.data.items);
    }



    return (
        <div className='rec-videos'>
            {relatedVideos.map((relatedVideo)=>{
                let { url, width, height } = relatedVideo.snippet.thumbnails.default;

                return (
                    <div className='rec-video'>
                        <Link className='flex-container' to={`/watch/${relatedVideo.id.videoId}`} >
                            <iframe width={width} height={height} src={url}></iframe>
                            <p>{relatedVideo.snippet.title}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;