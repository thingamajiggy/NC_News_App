import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const TopicsPage = () => {
    const [topic, setTopic] = useState([]);
    const {slug} = useParams();

    useEffect(() => {
        axios.get(`/articles?topic=${slug}`)
        .then((res) => {
            return setTopic(res.data.result)
        })
    }, [slug])

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="my-3 text-capitalize">
                        {slug}
                    </h2>
                    <div className="container">
                    <div className="row">
                        {topic.map(({article_id, title, author, body}) => {
                            return (
                            <div className="col-xs-12 col-sm-6">
                            <div key={article_id} className="card">
                                <div className="card-body">
                                <div className="card-title">
                                <Link to={`/articles/${article_id}`}>{title}</Link>
                                <p>by {author}</p>
                                </div>
                                <div className="card-text">
                                    {body.slice(0, 100)}...
                                </div>
                                </div>
                            </div>
                            </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default TopicsPage;