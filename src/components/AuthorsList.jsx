import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const AuthorsList = (() => {
    const [authorLists, setAuthorLists] = useState([]);
    useEffect(() => {
        articlesApi.get("/users")
        .then((res) => {
            return setAuthorLists(res.data.users)
        })
    }, [])
    return (
        <ul>
            {authorLists.map(({username}) => {
                return <li key={username} className="App-list">
                    <Link to={`/users/${username}`}>{username}</Link>
                </li>
            })}
        </ul>
    )
})

export default AuthorsList;