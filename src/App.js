import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import ArticlesPage from './components/ArticlesPage';
import AuthorsList from './components/AuthorsList';
import AuthorsPage from './components/AuthorsPage';
import TopicsList from './components/TopicsList';
import TopicsPage from './components/TopicsPage';
import CommentsList from './components/CommentsList';
import CommentsAdder from './components/CommentsAdder';
import { UserContext } from './contexts/User';
import { useContext } from 'react'
import User from './components/User';

function App() {
  const [articlesLists, setArticlesLists] = useState([]);
  const value = useContext(UserContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => value.setLoggedInUser(null)}>Log out</button>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<User />} />
            <Route path="/articles" element={<ArticlesList articlesLists={articlesLists} setArticlesLists={setArticlesLists} />} />
            <Route path="/articles/:article_id" element={<ArticlesPage />} />
            <Route path="/articles/:article_id/comments" element={<CommentsList />} />
            <Route path="/articles/:article_id/comments" element={<CommentsAdder />} />
            <Route path="/users" element={<AuthorsList />} />
            <Route path="/users/:username" element={<AuthorsPage />} />
            <Route path="/topics" element={<TopicsList />} />
            <Route path="/topics/:slug" element={<TopicsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

