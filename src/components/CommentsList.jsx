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
        <div className="comment pb-4 border-b border-gray-200">
            <div className="flex">       
                <div className="w-11/12">     
                {comments.map((comment, commentIndex) => {
                return <div key={comment.comment_id}>
                    <div className="mb-1 font-weight-bold">{comment.author}</div>
                    <div className="">{comment.body}</div>

                    <button type="button">
                    {comment.votes}
                    <span aria-label="votes for this comment">👍</span>
                    </button>

                    {loggedInUser?.username === comment.author ? <button onClick={() => handleDeleteComment(commentIndex, comment.comment_id)}>delete</button> : null}
                    
                </div>
            })}
                </div>
            </div>
        </div>
        </section>
    )
}

export default CommentsList;