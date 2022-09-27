import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ArticlesList from './components/ArticlesList';
import ArticlesPage from './components/ArticlesPage';
import AuthorsList from './components/AuthorsList';
import AuthorsPage from './components/AuthorsPage';
import TopicsList from './components/TopicsList';
import TopicsPage from './components/TopicsPage';

function App() {
  const [articlesLists, setArticlesLists] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList articlesLists={articlesLists} setArticlesLists={setArticlesLists} />} />
          <Route path="/articles/:article_id" element={<ArticlesPage />} />
          <Route path="/users" element={<AuthorsList />} />
          <Route path="/users/:username" element={<AuthorsPage />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:slug" element={<TopicsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

