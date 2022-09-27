import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const TopicsPage = () => {
    const [topic, setTopic] = useState([]);
    const {slug} = useParams();

    useEffect(() => {
        articlesApi.get(`/articles?topic=${slug}`)
        .then((res) => {
            return setTopic(res.data.result)
        })
    }, [slug, articlesApi])

    return (
        <ul>
            {topic.map(({article_id, title, author, body}) => {
                return <li key={article_id} className="App-list">
                    <h3>{title}</h3>
                    <p>by {author}</p>
                    <p>{body}</p>
                </li>
            })}
        </ul>
    )
    
}

export default TopicsPage;