import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

function RepoDetail( {findRepo, eachRepo} ) {

    const params = useParams ();

    const repo = findRepo(params.id);

    return (
        <div>
            <img className="projectImg" src={eachRepo.image} alt="Foto del repositorio" />
            <h2 className="repoName">{eachRepo.name}</h2>
            <h3 className="repoDesc">{eachRepo.description}</h3>
            <h3 className="repoDesc">{eachRepo.url}</h3>
            <h3 className="repoDesc">{eachRepo.language}</h3>
        </div>
    );
}

RepoDetail.propTypes = {
    repos: PropTypes.array
};

export default RepoDetail;