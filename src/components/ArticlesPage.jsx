import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const ArticlesPage = () => {
    const [article, setArticle] = useState({});
    const params = useParams();

    useEffect(() => {
        articlesApi.get(`/articles/${params.article_id}`)
        .then((res) => {
            return setArticle(res.data)
        })
    }, [params.article_id])

    return (
        <div>
        <h3>{article.title}</h3>
        <p>by {article.author}</p>
        <p>{article.body}</p>
        
        <Link to={`/articles/${Number(params.article_id) + 1}`}>Next News</Link>
        </div>
    )   
}

export default ArticlesPage;