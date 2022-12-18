import { Link } from 'react-router-dom';
import { UserContext } from "../context/User";
import { useContext } from "react";
import AuthorsList from './AuthorsList';
import TopicsList from './TopicsList';


const Nav = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            {/* <a className="navbar-brand" href="#">Amazing News</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
    <li className="nav-item"><Link to="/articles" className="nav-link active" aria-current="page">News</Link></li> 
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Author
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><AuthorsList /></li>
          </ul>
    </li>
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Topic
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><TopicsList /></li>
          </ul>
    </li>  
    {
        !loggedInUser ?
        <li className="nav-item"><Link to="/login" className="nav-link active" aria-current="page">Sign in</Link></li>   
        : null
    }
      
    {
        loggedInUser ? 
        <li>
            <li className="nav-item"><Link onClick={() => {
                setLoggedInUser(null);
            }} to="/login" className="nav-link active" aria-current="page">Sign out</Link></li>     
        </li>
        : null
    }
    </ul> 
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>          
    </div>
    </div>
</nav>
    )
}

export default Nav;