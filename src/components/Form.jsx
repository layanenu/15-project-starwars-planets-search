import { useContext } from 'react';
import Context from '../context/context';

function Form() {
  const {
    inputNameFilter,
    handleInputNameFilter,
    columnFilter,
    handleColumnFilter,
    comparisonFilter,
    handleComparisonFilter,
    valueFilter,
    handleValueFilter,
    handleClickFilterPlanet,
    NewColumnFilterItens,
  } = useContext(Context);

  return (
    <form>
      <label htmlFor="name-filter">
        Projeto Star Wars - Trybe
        <input
          data-testid="name-filter"
          type="text"
          id="name-filter"
          value={ inputNameFilter }
          onChange={ handleInputNameFilter }
        />
      </label>

      <label htmlFor="column-filter">
        Coluna
        <select
          data-testid="column-filter"
          name="column-filter"
          id="column-filter"
          value={ columnFilter }
          onChange={ handleColumnFilter }
        >
          { NewColumnFilterItens?.map((element, index) => (
            <option key={ index } value={ element }>
              { element }
            </option>))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operador:
        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          id="comparison-filter"
          value={ comparisonFilter }
          onChange={ handleComparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          id="value-filter"
          name="value-filter"
          value={ valueFilter }
          onChange={ handleValueFilter }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilterPlanet }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Form;
