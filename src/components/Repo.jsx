import { Link } from "react-router-dom";
import '../scss/App.scss';
import '../scss/Repos.scss';


function Repo({eachRepo}) {


    // const DOTS = {
    //     'CSS':'🟣',
    //     'React':'🔵',
    //     'JavaScript':'🟠',
    //     'HTML':'🟢',
    // }
    // const dots = ({language}) => {

    //     if( (language) ==='CSS') {
    //       return '🟣';
    //     }
    //     if( (language) ==='React' ) {
    //       return '🔵';
    //     }
    //     if( (language) ==='JavaScript' ) {
    //         return '🟠';
    //       }
    //     if( (language) ==='HTML' ) {
    //     return '🟢';
    //     }
    //   }

    return (
        <Link className="linkRepo" to={"/repo/"+eachRepo.id}>
            <div className="repoInfo">
                <img className="projectImg" src={eachRepo.image} alt="Foto del repositorio"/>
                <h2 className="repoName">{eachRepo.name}</h2>
                <h3 className="repoDesc">{eachRepo.description}</h3>
                <h3 className="repoDesc">{eachRepo.url}</h3>
                <h3 className="repoDesc">{eachRepo.language}</h3>
            </div>
        </Link>
    );
}

export default Repo;
