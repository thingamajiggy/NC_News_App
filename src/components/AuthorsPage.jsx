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
            {author.map(({title, article_id}) => {
                return <li key={article_id} className="App-list">
                    <Link to={`/articles/${article_id}`}>{title}</Link>
                </li>
            })}
            </ul>
        </>
    )
}

export default AuthorsPage