import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AuthorsPage = () => {
  const [author, setAuthor] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`/articles?author=${params.username}`).then((res) => {
      setAuthor(res.data.result);
    });
  }, [params.username]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-lg-9">
          <div className="container my-5">
            <div className="row">
              <div className="col-xs-12">
                <div className="d-flex justify-space-between">
                  <h2 className="mr-auto">
                    Welcome to the author {params.username}'s page
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4">
              {author.map(({ article_id, author, title, body, topic }) => {
                return (
                  <div key={title} className="col-xs-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="fw-bold fs-5">{title}</div>
                        </div>
                        <div className="card-text text-muted">
                          {body.slice(0, 95)}...
                          <Link to={`/articles/${article_id}`}>view</Link>
                        </div>
                        <div className="mt-2">
                          Topic:{'  '}
                          <Link
                            className="card-link text-capitalize"
                            to={`/topics/${topic}`}>
                            {topic}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
