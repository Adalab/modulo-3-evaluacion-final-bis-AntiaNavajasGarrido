import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Search from './Search';
import RepoList from './RepoList';
import {fetchRepos} from '../data/fetch';
import ls from '../data/localStorage';




function App() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    fetchRepos()
      .then(responseData => {
        setRepos(responseData);
        ls.set('repos', responseData);
      });

  }, []);



  return (
    <div>
      <Search></Search>
      <RepoList ></RepoList>

      <footer>
        <small>&copy; 2024 Antia Navajas | promo Alice</small>
      </footer>
    </div>
  )
}

export default App
