import { useState, useEffect } from 'react';
import '../scss/App.scss';
import '../scss/Repos.scss';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import Filters from './Filters/Filters';
import { fetchRepos } from '../data/fetch';
import ls from '../data/localStorage';
import { Route, Routes } from 'react-router-dom';




function App() {


  const [ filterName, setFilterName ] = useState ('');
  const [ filterLanguage, setFilterLanguage ] = useState ('');

  const [repos, setRepos] = useState(ls.get('repos', []));

  useEffect(() => {

    if (!ls.includes('repos')) {

      fetchRepos()
        .then(responseData => {
          setRepos(responseData);
          ls.set('repos', responseData);
        });
    }


  }, []);

  const handleChangeFilterName = (name) => {
    setFilterName(name)
  };

  const handleChangeFilterLanguage = (language) => {
    setFilterLanguage(language)
  };


  const findRepo = (id) => {
    return repos.find(eachRepo => eachRepo.id === id)
  };

  const filteredName = repos.filter(repo => repo.name === filterName);

  return (
    <div className='app'>
      <header>
        <h2 className='title'>Repos at Adalab in GitHub</h2>
      </header>

      <Routes>

        <Route path='/' element={
          <>
            <Filters filterLanguage={filterLanguage} handleChangeFilterLanguage={handleChangeFilterLanguage} filterName={filterName} handleChangeFilterName={handleChangeFilterName} />
            <RepoList repos={repos} />
          </>
        } />

        <Route path='/repo/:id' element={<RepoDetail eachRepo={repos} findRepo={findRepo} />} />

      </Routes>



      <footer className='footer'>
        <small>&copy; 2024 Antia Navajas | promo Alice</small>
      </footer>
    </div>
  )
}

export default App
