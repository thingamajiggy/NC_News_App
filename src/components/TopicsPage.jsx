import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const TopicsPage = () => {
  const [topic, setTopic] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`/articles?topic=${slug}`).then((res) => {
      return setTopic(res.data.result);
    });
  }, [slug]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-lg-9">
          <div className="container my-5">
            <div className="row">
              <h2 className="my-3 text-capitalize">{slug}</h2>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4">
              {topic.map(({ article_id, title, author, body }) => {
                return (
                  <div key={article_id} className="col-xs-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="card-title">
                          <div className="fw-bold fs-5">{title}</div>
                          <p className="text-muted">by {author}</p>
                        </div>
                        <div className="card-text">
                          {body.slice(0, 100)}...{' '}
                          <Link to={`/articles/${article_id}`}>view</Link>
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

export default TopicsPage;
