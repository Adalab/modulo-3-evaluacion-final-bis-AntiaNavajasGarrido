function FilterByName({ filterName, handleChangeFilterName }) {

    const hadleChange = (event) => {
        handleChangeFilterName(event.currentTarget.value);

    }

    return (
        <>
            <label htmlFor="names" className="label__name">Busca por título del repo:</label>
            <input className="filterName" id="names" type="text" placeholder="Nombre del repositorio" value ={filterName} onInput={hadleChange} />
        </>
    );
}

export default FilterByName;