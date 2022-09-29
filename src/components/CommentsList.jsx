import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const CommentsList = () => {
    const [comments, setComments] = useState([]);
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
                    <p>{comment.body}</p>
                    <button onClick={() => handleDeleteComment(commentItem)}>delete</button>
                </li>
            })}
        </ul>
        </section>
    )
}

export default CommentsList;