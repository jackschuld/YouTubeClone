import './Comment.css'


const Comment = ({ comment }) => {
    return ( 
        <div className='comment'>
            <h3>@{comment.username}:</h3>
            <p>{comment.text}</p>
            <p>Likes:{comment.likes}   Dislikes:{comment.dislikes}</p>
        </div>
     );
}
 
export default Comment;