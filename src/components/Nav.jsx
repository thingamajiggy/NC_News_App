import { Link } from 'react-router-dom';

const Nav = () => {
    return (
<nav>
    <ul className=" App-news-list App-list">  
    <li className="App-news-item"><Link to="/">Home</Link></li>
    <li className="App-news-item"><Link to="/articles">News</Link></li>  
    <li className="App-news-item"><Link to="/users">Authors</Link></li>  
    <li className="App-news-item"><Link to="/topics">Topics</Link></li>    
    </ul> 
</nav>
    )
}

export default Nav;