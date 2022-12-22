import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResultsTerm = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`/articles/search/${searchTerm}`)
        .then((res) => {
          setSearchResults(res.data.articles);
        })
        .catch(() => {
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xs-12">
          <h1>Search Results</h1>
          {!searchTerm ? <p className="lead">No search term</p> : null}
          {searchResults.length ? (
            <ol className="list-unstyled">
              {searchResults.map((article) => {
                return (
                  <li key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className="lead">No article titles matched your search term</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsTerm;
