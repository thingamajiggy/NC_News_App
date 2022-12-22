import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const authors = [
    "tickle122", "grumpy19", "happyamy2016", "cooljmessy", "weegembump", "jessjelly"
]

export const CommentsAdder = ({addComment}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const [addUsername, setAddUsername] = useState(authors[0])
    const params = useParams();
   
   const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    axios.post(`/articles/${params.article_id}/comments`, {
        body: commentInput,
        username: addUsername
    })
    .then(({ data }) => {
        addComment(data.newComments)
        setCommentInput('');
        alert('Successfully posted comment');
    })
    .catch((err) => {
        console.log(err);
    }).then(() => {
        setIsSubmitting(false)
    })
   }

   const handleAddUsernameChange = (e) => {
    setAddUsername(e.target.value)
   }

    return(
        <form onSubmit={(e) => {handleSubmit(e)}}>

        <div className="form-group mb-3">
            <select className="form-select" onChange={(e) => {handleAddUsernameChange(e)}}>
                <option value="">Choose one</option>
                {authors.map((username) => <option value={username} key={username}>{username}</option>)}
            </select>
        </div>

        <div className="form-group">
            {/* <label htmlFor="commentInput">Add a comment</label> */}
            <textarea
            className="form-control"
            id="commentInput"
            placeholder="Your Comment"
            value={commentInput} 
            onChange={(e) => setCommentInput(e.target.value)}
            rows="3"
            >
            </textarea>
        </div>

        <div>
            <button 
            type="button" className="btn button comments__button text-3 border-none p-2 text-white uppercase mt-1 bg-black float-right uppercase
            "
            disabled={isSubmitting || !commentInput || !addUsername}>
                Add
            </button>
        </div>

        </form>
    )
}
export default CommentsAdder;