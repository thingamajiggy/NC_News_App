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
    const params = useParams();

    useEffect(() => {
        articlesApi.get(`/articles/${params.article_id}`)
        .then((res) => {
            return setArticle(res.data)
        })
    }, [params.article_id])
    
const voteOnArticle = (article_id) => {
    const reqBody = {
        inc_votes: 1,
    };
        articlesApi
        .patch(`/articles/${article_id}`, reqBody)
        .then(({ data }) => {
            console.log(data, ">>>>>")
            // setArticle((currentArticle) => {
            //     return currentArticle.map(current => {
            //         if(current.article_id === article_id) {
            //             return {...current, votes: current.votes + 1 }
            //         } 
            //     })
            // })
        })
    }

    return (
        <div>
        <p>Topic: {article.topic}</p>
        <h3>{article.title}</h3>
        <p>by {article.author}</p>
        <p>{article.body}</p>

        <button type="button" onClick={() => {
            voteOnArticle(params.article_id);
        }}>
        {article.votes}
        <span aria-label="votes for this comment">👍</span>
        </button>

        <section>
            <p>comments</p>
        <CommentsList />
        </section>

        <section>
        <CommentsAdder />
        </section>
        
        <Link to={`/articles/${Number(params.article_id) + 1}`}>Next News</Link>
        </div>
    )   
}

export default ArticlesPage;