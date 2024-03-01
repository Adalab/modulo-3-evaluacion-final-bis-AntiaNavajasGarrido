import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Repo from './Repo';

function RepoList({repos}) {
    const renderRepos = repos.map((eachRepo) => {

        return <li className='card' key={eachRepo.id}>
            <Link to={`/repo/${eachRepo.id}`}>
                <Repo eachRepo={eachRepo} />
            </Link>
        </li>
    })
    return (
        <section className=''>
            <h2 className=''>Repos at Adalab in GitHub</h2>
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