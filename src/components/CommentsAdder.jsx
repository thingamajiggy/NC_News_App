import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

const authors = [
    "tickle122", "grumpy19", "happyamy2016", "cooljmessy", "weegembump", "jessjelly"
]

export const CommentsAdder = ({setComments}) => {
    const [commentInput, setCommentInput] = useState('');
    const [addUsername, setAddUsername] = useState(authors[0])
    const params = useParams();
   
   const handleSubmit = (e) => {
    e.preventDefault()

    articlesApi.post(`/articles/${params.article_id}/comments`, {
        body: commentInput,
        username: addUsername
    })
    .then(({ data }) => {
        setComments((currentComments) => {
            console.log(currentComments, ">>figure out")
            return [data.newComments, ...currentComments];
        })
        setCommentInput('');
    })
    .catch((err) => {
        console.log(err);
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

        <select onChange={(e) => {handleAddUsernameChange(e)}}>
            {authors.map((username) => <option value={username} key={username}>{username}</option>)}
        </select>

            <button>Add</button>

        </form>
        </section>
    )
}
export default CommentsAdder;