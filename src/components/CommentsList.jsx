import { useEffect, useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/User';
import axios from 'axios';

export const CommentsList = ({ setComments, comments }) => {
  const params = useParams();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    axios.get(`/articles/${params.article_id}/comments`).then((res) => {
      setComments(res.data.selectedComments);
    });
  }, [setComments, params.article_id]);

  const handleDeleteComment = (commentIndex, comment_id) => {
    axios.delete(`/comments/${comment_id}`);
    const newComments = [...comments];
    newComments.splice(commentIndex, 1);
    setComments(newComments);
  };

  return (
    <section>
      <div className="pb-4">
        <div>
          <div>
            {comments.map((comment, commentIndex) => {
              return (
                <Fragment key={comment.comment_id}>
                  <div className="mb-3">
                    <div className="mb-1 fw-bold">{comment.author}</div>
                    <div>{comment.body}</div>
                    <div className="d-flex justify-content-end">
                      {comment.votes}
                      <div className="ms-1" aria-label="votes for this comment">
                        👍
                      </div>
                    </div>
                    {loggedInUser?.username === comment.author ? (
                      <button
                        onClick={() =>
                          handleDeleteComment(commentIndex, comment.comment_id)
                        }>
                        Delete
                      </button>
                    ) : null}
                  </div>
                  {commentIndex === comments.length - 1 ? null : <hr />}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsList;
