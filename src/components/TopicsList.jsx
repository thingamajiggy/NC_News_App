import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const TopicsList = () => {
    const [topicLists, setTopicLists] = useState([]);
    useEffect(() => {
        axios.get("/topics")
        .then((res) => {
            return setTopicLists(res.data.topics)
        })
    }, [])
    return (
        <ul aria-labelledby='topics-dropdown' className='dropdown-menu'>
            {topicLists.map(({slug}) => {
                return <li key={slug} className="dropdown-item">
                    <Link className="text-capitalize" to={`/topics/${slug}`}>{slug}</Link>
                </li>
            })}
        </ul>
    )
}

export default TopicsList;