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
        <ul aria-labelledby="author-dropdown" className="dropdown-menu">
            {authorLists.map((authorList) => {
                return <li key={authorList.username} className="dropdown-item">
                    <Link to={`/users/${authorList.username}`}>{authorList.name}</Link>
                </li>
            })}
        </ul>
    )
})

export default AuthorsList;