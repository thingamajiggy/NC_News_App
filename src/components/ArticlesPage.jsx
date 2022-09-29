import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CommentsList from "./CommentsList";
import CommentsAdder from "./CommentsAdder";

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const ArticlesPage = () => {
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const params = useParams();

    useEffect(() => {
        articlesApi.get(`/articles/${params.article_id}`)
        .then((res) => {
            return setArticle(res.data)
        })
    }, [params.article_id])
    
const voteOnArticle = (article_id, change) => {
    const reqBody = {
        inc_votes: change,
    };

    setArticle({
        ...article,
        votes: article.votes + change
    })

        articlesApi
        .patch(`/articles/${article_id}`, reqBody)
        .catch((err) => {
            console.error(err)
            alert('error updating article votes')
        })
    }

    return (
        <div>
        <p>Topic: {article.topic}</p>
        <h3>{article.title}</h3>
        <p>by {article.author}</p>
        <p>{article.body}</p>

        {article.votes}
        <button type="button" onClick={() => {
            voteOnArticle(params.article_id, 1);
        }}>
        
        <span aria-label="increase votes for this article">👍</span>
        </button>
        <button type="button" onClick={() => {
            voteOnArticle(params.article_id, -1);
        }}>
        <span aria-label="decrease votes for this article">👎</span>
        </button>

        <section>
            <p>comments</p>
        <CommentsList comments={comments} setComments={setComments} />
        </section>

        <section>
        <CommentsAdder addComment={(newComment) => {
                setComments([
                    ...comments,
                    newComment,
                ])
        }} />
        </section>
        
        <Link to={`/articles/${Number(params.article_id) + 1}`}>Next News</Link>
        </div>
    )   
}

export default ArticlesPage;