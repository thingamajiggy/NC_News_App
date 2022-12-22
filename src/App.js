import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useContext } from 'react';
import ArticlesList from './components/ArticlesList';
import ArticlesPage from './components/ArticlesPage';
import AuthorsList from './components/AuthorsList';
import AuthorsPage from './components/AuthorsPage';
import TopicsList from './components/TopicsList';
import TopicsPage from './components/TopicsPage';
import User from './components/User';
import { UserContext, UserProvider } from './context/User';
import LogInPage from './components/LogInPage';
import axios from 'axios';
import SearchResultsPage from './components/SearchResultsPage'

axios.defaults.baseURL = "http://localhost:9090/api";

function App() {
  const [articlesLists, setArticlesLists] = useState([]);

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Header />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<User />} />
              <Route path="/loggedin" element={<LogInPage />} />
              <Route path="/articles" element={<ArticlesList articlesLists={articlesLists} setArticlesLists={setArticlesLists} />} />
              <Route path="/articles/:article_id" element={<ArticlesPage />} />
              <Route path="/users" element={<AuthorsList />} />
              <Route path="/users/:username" element={<AuthorsPage />} />
              <Route path="/topics" element={<TopicsList />} />
              <Route path="/topics/:slug" element={<TopicsPage />} />
              <Route path="/search-articles/:searchTerm" element={<SearchResultsPage />} />
            </Routes>
          </main>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

