import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AuthorsList = (() => {
    const [authorLists, setAuthorLists] = useState([]);

    useEffect(() => {
        axios.get("/users")
        .then((res) => {
            return setAuthorLists(res.data.users)
        })
    }, [])
    return (
        <ul>
            {authorLists.map((authorList) => {
                return <li key={authorList.username} className="App-list">
                    <Link to={`/users/${authorList.username}`}>{authorList.name}</Link>
                </li>
            })}
        </ul>
    )
})

export default AuthorsList;