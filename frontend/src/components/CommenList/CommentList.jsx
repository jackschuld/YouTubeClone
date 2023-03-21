import Comment from '../Comment/Comment'
import axios from 'axios';
import { useEffect, useState } from 'react';


const CommentList = ({ videoId }) => {

    const [comments, setComments] = useState([]);

    async function getAllComments() {
        let response = await axios.get("http://127.0.0.1:8000/api/" + videoId + "/comments/");
        setComments(response.data);
    }

    useEffect(()=>{
        getAllComments();
    }, [comments])

    let commentList = comments.map((comment) => <Comment comment={comment}/>)
    
    return ( 
        <div className='comments'>
            <h2>Comments List</h2>
            {commentList.reverse()}
        </div>
     );
}
 
export default CommentList;