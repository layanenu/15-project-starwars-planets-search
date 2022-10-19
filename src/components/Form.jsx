import { useContext } from 'react';
import Context from '../context/context';

function Form() {
  const { inputNameFilter, handleInputNameFilter } = useContext(Context);
  return (
    <form>
      <label htmlFor="input-name-filter">
        Projeto Star Wars - Trybe
        <input
          data-testid="name-filter"
          type="text"
          id="input-name-filter"
          value={ inputNameFilter }
          onChange={ handleInputNameFilter }
        />
      </label>
    </form>

  );
}

export default Form;
