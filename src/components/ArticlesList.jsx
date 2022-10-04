import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const ArticlesList = ({ articlesLists, setArticlesLists }) => {
    useEffect(() => {
        articlesApi.get("/articles")
        .then((res) => {
            return setArticlesLists(res.data.result);
        })
    }, [setArticlesLists])

    return (
        <ul>
            {articlesLists.map((articleList) => {
                return <li key={articleList.article_id} className="App-list">
                        <Link to={`/articles/${articleList.article_id}`}>{articleList.title}</Link>
                </li>
            })}
        </ul>
    )

}

    export default ArticlesList;

