import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const AuthorsPage = () => {
    const [author, setAuthor] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`/articles?author=${params.username}`)
        .then((res) => {
            setAuthor(res.data.result)
        })
    }, [params.username])
   
    return (
        <>
            <h2 className="mt-3">
                Welcome to the author {params.username}'s page
            </h2>
            <div className="container">
                <div className="row">

                {author.map(({author, title, body, topic}) => {
                    return (
                        <div className="col-xs-12 col-sm-6">
                            <div key={title} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <Link to={`/articles/${author}`}>{title}</Link>
                                    </div>
                                    <div className="card-text">
                                        {body.slice(0, 100)}...
                                    </div>
                                    <Link className="card-link text-capitalize" to={`/topics/${topic}`}>
                                        {topic}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
                </div>
            </div>
            
        </>
    )
}

export default AuthorsPage