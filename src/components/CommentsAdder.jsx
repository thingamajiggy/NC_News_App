import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

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

    articlesApi.post(`/articles/${params.article_id}/comments`, {
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
        <section>

        <form onSubmit={(e) => {handleSubmit(e)}}>
            <label htmlFor="commentInput">Add a comment</label>
            <textarea 
            id="commentInput" 
            value={commentInput} 
            onChange={(e) => setCommentInput(e.target.value)}>
            </textarea>

        <select className="form-select" onChange={(e) => {handleAddUsernameChange(e)}}>
            {authors.map((username) => <option value={username} key={username}>{username}</option>)}
        </select>

            <button disabled={isSubmitting || !commentInput || !addUsername}>Add</button>

        </form>
        </section>
    )
}
export default CommentsAdder;