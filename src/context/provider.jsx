import PropTypes from 'prop-types';
import { useCallback, useState, useEffect, useMemo } from 'react';
import Context from './context';

const columnFilterItens = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState(columnFilterItens[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [NewColumnFilterItens, setNewColumnFilterItens] = useState(columnFilterItens);

  const handleInputNameFilter = useCallback(({ target }) => {
    setInputNameFilter(target.value);
  }, []);

  const handleColumnFilter = useCallback(({ target }) => {
    setColumnFilter(target.value);
  }, []);

  const handleComparisonFilter = useCallback(({ target }) => {
    setComparisonFilter(target.value);
  }, []);

  const handleValueFilter = useCallback(({ target }) => {
    setValueFilter(target.value);
  }, []);

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const { results } = await response.json();
        const resultsWithoutResidents = results.filter((e) => e !== e.residents);
        setData(resultsWithoutResidents);
      } catch (e) {
        throw new Error(e);
      }
    };
    requestAPI();
  }, []);

  const handleClickFilterPlanet = useCallback(() => {
    if (comparisonFilter.includes('maior que')) {
      const filteredDate = data
        .filter((element) => Number(element[columnFilter]) > Number(valueFilter));
      setNewColumnFilterItens(NewColumnFilterItens.filter((el) => el !== columnFilter));
      setColumnFilter(NewColumnFilterItens[0]);
      setData(filteredDate);
    }
    if (comparisonFilter.includes('menor que')) {
      const filteredDate = data
        .filter((element) => Number(element[columnFilter]) < Number(valueFilter));
      setNewColumnFilterItens(NewColumnFilterItens.filter((el) => el !== columnFilter));
      setColumnFilter(NewColumnFilterItens[0]);
      setData(filteredDate);
    }
    if (comparisonFilter.includes('igual a')) {
      const filteredDate = data
        .filter((element) => Number(element[columnFilter]) === Number(valueFilter));
      setNewColumnFilterItens(NewColumnFilterItens.filter((el) => el !== columnFilter));
      setColumnFilter(NewColumnFilterItens[0]);
      setData(filteredDate);
    }
  });

  const contextValue = useMemo(() => ({
    data,
    inputNameFilter,
    columnFilter,
    comparisonFilter,
    valueFilter,
    handleInputNameFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    handleClickFilterPlanet,
    NewColumnFilterItens,
  }), [
    data,
    inputNameFilter,
    columnFilter,
    comparisonFilter,
    valueFilter,
    handleInputNameFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    handleClickFilterPlanet,
    NewColumnFilterItens,
  ]);

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
