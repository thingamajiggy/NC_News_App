import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const CommentsList = ({setComments, comments}) => {
    
    const params = useParams();

    useEffect(() => {
        articlesApi.get(`/articles/${params.article_id}/comments`)
        .then((res) => {
            setComments(res.data.selectedComments)
        })
    }, [params.article_id])
    
    const handleDeleteComment = (commentItem) => {
        const newComments = [...comments];
        newComments.splice(commentItem, 1);
        setComments(newComments);
    }

    return (
        <section>
        <ul>
            {comments.map((comment, commentItem) => {
                return <li key={comment.comment_id}>
                    <p>{comment.author}</p>
                    <p>{comment.body}</p>

                    <button type="button">
                    {comment.votes}
                    <span aria-label="votes for this comment">👍</span>
                    </button>

                    <button onClick={() => handleDeleteComment(commentItem)}>delete</button>
                </li>
            })}
        </ul>
        </section>
    )
}

export default CommentsList;