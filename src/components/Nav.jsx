import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User';
import { useContext, useState } from 'react';
import AuthorsList from './AuthorsList';
import TopicsList from './TopicsList';

const Nav = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/articles"
                className="nav-link active"
                aria-current="page">
                News
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="author-dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Author
              </a>
              <AuthorsList />
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="topics-dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Topic
              </a>
              <TopicsList />
            </li>
            {!loggedInUser ? (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page">
                  Sign in
                </Link>
              </li>
            ) : null}

            {loggedInUser ? (
              <li>
                <li className="nav-item">
                  <Link
                    onClick={() => {
                      setLoggedInUser(null);
                    }}
                    to="/login"
                    className="nav-link active"
                    aria-current="page">
                    Sign out
                  </Link>
                </li>
              </li>
            ) : null}
          </ul>
          <form className="d-flex" role="search">
            <input
              value={searchTerm}
              onChange={(ev) => {
                setSearchTerm(ev.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => {
                navigate(`/search-articles/${searchTerm}`);
              }}
              className="btn btn-outline-success"
              type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
