import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Repo from './Repo';
import '../scss/App.scss';
import '../scss/Repos.scss';

function RepoList({repos}) {
    const renderRepos = repos.map((eachRepo) => {

        return <li className='card' key={eachRepo.id}>
            <Link to={`/repo/${eachRepo.id}`}>
                <Repo eachRepo={eachRepo} />
            </Link>
        </li>
    })
    
    return (
        <section>
            <ul className='cards'>
                {renderRepos}
                
            </ul>
        </section>
    );
    
}

RepoList.propTypes = {
    repos: PropTypes.array
}

export default RepoList;