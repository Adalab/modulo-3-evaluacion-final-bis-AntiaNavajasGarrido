function FilterByName({filterName, handleChangeFilterName}) {

    const hadleChange = (event) => {
        handleChangeFilterName(event.currentTarget.value);

    }

    return (
        <>
            <label htmlFor="names" className="label__name">Busca por título del repo:</label>
            <input className="filterName" id="names" type="text" placeholder="Nombre del personaje" value={filterName} onInput={hadleChange} />
            {/* <label htmlFor="all">Todos los personajes:</label>
            <input className="filterAll" type="checkbox" id="all" name="all" value="all" checked={filterName === "all"} /> */}
        </>
    );
}

export default FilterByName;