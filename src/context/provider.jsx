import PropTypes from 'prop-types';
import { useCallback, useState, useEffect, useMemo } from 'react';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');
  // const [coluna, setColuna] = useState('population');
  // const [operador, setOperador] = useState('menor que');
  // const [quanty, setQuanty] = useState('');
  // const [ordenar, setOrdenar] = useState('population');

  const handleInputNameFilter = useCallback(({ target }) => {
    setInputNameFilter(target.value);
  }, []);

  // const handleInputNameFilter useCallback = ({ target }) => {
  //   setInputNameFilter(target.value);
  // };

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const { results } = await response.json();
        // console.log(results);
        const resultsWithoutResidents = results.filter((e) => e !== e.residents);
        setData(resultsWithoutResidents);
        // console.log(resultsWithoutResidents);
      } catch (e) {
        throw new Error(e);
      }
    };
    requestAPI();
  }, []);

  const contextValue = useMemo(() => ({
    data, inputNameFilter, handleInputNameFilter,
  }), [data, inputNameFilter, handleInputNameFilter]);

  // console.log(contextValue);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
