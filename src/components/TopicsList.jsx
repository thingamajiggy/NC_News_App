import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const TopicsList = () => {
    const [topicLists, setTopicLists] = useState([]);
    useEffect(() => {
        articlesApi.get("/topics")
        .then((res) => {
            return setTopicLists(res.data.topics)
        })
    }, [])
    return (
        <ul>
            {topicLists.map(({slug}) => {
                return <li key={slug} className="App-list">
                    <Link to={`/topics/${slug}`}>{slug}</Link>
                </li>
            })}
        </ul>
    )
}

export default TopicsList;