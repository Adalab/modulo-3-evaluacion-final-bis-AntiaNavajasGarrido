import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import '../scss/App.scss';
import '../scss/Repos.scss';

function RepoDetail( {findRepo} ) {

    const params = useParams ();

    const repo = findRepo(parseInt(params.id));

    return (
        <>
            <div className='cardDetail'>
                <img className="projectImg" src={repo.image} alt="Foto del repositorio" />
                <h2 className="repoName">{repo.name}</h2>
                <h3 className="repoDesc">{repo.description}</h3>
                <h3 className="repoDesc">{repo.url}</h3>
                <h3 className="repoDesc">{repo.language}</h3>
            </div>
            <div className='backLink'>
                <Link to="/" className='link'>Volver</Link>
            </div>
        </>
    );
}

RepoDetail.propTypes = {
    repos: PropTypes.array
};

export default RepoDetail;