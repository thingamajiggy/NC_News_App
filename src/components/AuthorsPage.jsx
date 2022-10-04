import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

export const AuthorsPage = () => {
    const [author, setAuthor] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        articlesApi.get(`/articles?author=${username}`)
        .then((res) => {
            setAuthor(res.data.result)
        })
    }, [username])
   
    return (
        <>
            <h2>
                Welcome to the author {username}'s page
            </h2>
            <ul>
            {author.map(({author, title, body}) => {
                return <li key={author} className="App-list">
                    <Link to={`/articles/${author}`}>{title}</Link>
                    <p>{body}</p>
                </li>
            })}
            </ul>
        </>
    )
}

export default AuthorsPage