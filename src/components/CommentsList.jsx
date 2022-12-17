import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/User";
import axios from 'axios'

export const CommentsList = ({setComments, comments}) => {
    
    const params = useParams();
    const { loggedInUser } = useContext(UserContext)

    useEffect(() => {
        axios.get(`/articles/${params.article_id}/comments`)
        .then((res) => {
            setComments(res.data.selectedComments)
        })
    }, [params.article_id])
    
    const handleDeleteComment = (commentIndex, comment_id) => {
        axios.delete(`/comments/${comment_id}`)
        const newComments = [...comments];
        newComments.splice(commentIndex, 1);
        setComments(newComments);
    }
 
    return (
        <section>
        <ul>
            {comments.map((comment, commentIndex) => {
                return <li key={comment.comment_id}>
                    <p>{comment.author}</p>
                    <p>{comment.body}</p>

                    <button type="button">
                    {comment.votes}
                    <span aria-label="votes for this comment">👍</span>
                    </button>

                    {loggedInUser?.username === comment.author ? <button onClick={() => handleDeleteComment(commentIndex, comment.comment_id)}>delete</button> : null}
                    
                </li>
            })}
        </ul>
        </section>
    )
}

export default CommentsList;