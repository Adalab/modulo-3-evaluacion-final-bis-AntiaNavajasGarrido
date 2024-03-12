import FilterByLanguage from "./FilterByLanguage";
import FilterByName from "./FilterByName";


function Filters( {filterName, handleChangeFilterName, filterLanguage, handleChangeFilterLanguage}) {

    return (
        <>
            
            <form className="filters" action="./">
                <FilterByName filterName={filterName} handleChangeFilterName={handleChangeFilterName}></FilterByName>
                <FilterByLanguage filterLanguage= {filterLanguage} handleChangeFilterLanguage={handleChangeFilterLanguage}></FilterByLanguage>
            </form>
        </>

    );
}

export default Filters;