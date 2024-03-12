function FilterByLanguage({filterLanguage, handleChangeFilterLanguage}) {

    const hadleChange = (event) => {
        handleChangeFilterLanguage(event.currentTarget.value);

    }

    return (
    <>
    <div className="filterLanguage">
        <label className="label__name" htmlFor="searchLanguage">Busca por lenguaje:
        <select name="language" id="searchLanguage" onChange={hadleChange} value={filterLanguage}>
          <option value="CSS">CSS</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="all">Todos</option>
        </select>
          </label>
    </div>
  </>
)}

export default FilterByLanguage;