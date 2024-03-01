import '../scss/App.scss';
import Search from './Search';
import RepoList from './RepoList';




function App() {
  return (
    <div>
      <Search></Search>
      <RepoList></RepoList>

      <footer>
        <small>&copy; 2024 Antia Navajas | promo Alice</small>
      </footer>
    </div>
  )
}

export default App
