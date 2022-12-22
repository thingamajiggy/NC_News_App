import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CommentsList from './CommentsList';
import CommentsAdder from './CommentsAdder';

export const ArticlesPage = ({ articleList }) => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const params = useParams();

  useEffect(() => {
    axios.get(`/articles/${params.article_id}`).then((res) => {
      return setArticle(res.data.article);
    });
  }, [params.article_id]);

  const voteOnArticle = (article_id, change) => {
    setIsVoting(true);

    const reqBody = {
      inc_votes: change,
    };

    setArticle({
      ...article,
      votes: article.votes + change,
    });
    axios.patch(`/articles/${article_id}`, reqBody).catch((err) => {
      console.error(err);
      alert('error updating article votes');
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="text-capitalize">
                Topic: <span className="fw-bold">{article.topic}</span>
              </p>
              <div className="card-title">
                <h3>{article.title}</h3>
              </div>
              <div>
                <p className="text-muted">
                  by {article.author} | published{' '}
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="card-text">
                <p>{article.body}</p>
                <div className="d-flex justify-content-end align-items-center">
                  <div className="badge bg-primary me-3">
                    Votes: {article.votes}
                  </div>

                  <button
                    className="btn btn-sm me-1"
                    aria-label="increase votes for this article"
                    type="button"
                    onClick={() => {
                      voteOnArticle(params.article_id, 1);
                    }}
                    disabled={isVoting}>
                    👍
                  </button>
                  <button
                    className="btn btn-sm"
                    aria-label="decrease votes for this article"
                    type="button"
                    onClick={() => {
                      voteOnArticle(params.article_id, -1);
                    }}
                    disabled={isVoting}>
                    👎
                  </button>
                </div>
              </div>

              <div className="border-line"></div>

              <div className="comment-line fw-bold">Comments</div>

              <section className="form-design">
                <CommentsAdder
                  addComment={(newComment) => {
                    setComments([...comments, newComment]);
                  }}
                />
              </section>

              <div className="border-line-2"></div>

              <section>
                <CommentsList comments={comments} setComments={setComments} />
              </section>

              <Link to={`/articles/${Number(params.article_id) + 1}`}>
                Next News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
