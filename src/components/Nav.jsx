import { Link } from 'react-router-dom';
import { UserContext } from "../context/User";
import { useContext } from "react";

const Nav = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
<nav>
    <ul className=" App-news-list App-list">  
    <li className="App-news-item"><Link to="/">Home</Link></li>
    <li className="App-news-item"><Link to="/articles">News</Link></li>  
    <li className="App-news-item"><Link to="/users">Authors</Link></li>  
    <li className="App-news-item"><Link to="/topics">Topics</Link></li>
    {
        !loggedInUser ?
        <li className="App-news-item"><Link to="/login">Sign in</Link></li>   
        : null
    }
      
    {
        loggedInUser ? 
        <li>
            <li className="App-news-item"><Link onClick={() => {
                setLoggedInUser(null);
            }} to="/login">Sign out</Link></li>     
        </li>
        : null
    }
    </ul> 
</nav>
    )
}

export default Nav;