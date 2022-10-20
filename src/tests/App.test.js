import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testes para atingir 30% de cobertura total da aplicação', () => {
  test('Verifica se o Form é renderizado', async () => {
    render(<App />);

    const inputNameFilter = screen.getByTestId('name-filter');
    const inputColumnFilter = screen.getByTestId('column-filter');
    const inputComparisonFilter = screen.getByTestId('comparison-filter');
    const inputValueFilter = screen.getByTestId('value-filter');
    const inputButtonFilter = screen.getByTestId('button-filter');

    expect(inputNameFilter).toBeInTheDocument();
    expect(inputColumnFilter).toBeInTheDocument();
    expect(inputComparisonFilter).toBeInTheDocument();
    expect(inputValueFilter).toBeInTheDocument();
    expect(inputButtonFilter).toBeInTheDocument();
  });
  test('Verifica os filtros da tabela', async () => {
    render(<App />);

    const inputNameFilter = screen.getByTestId('name-filter');
    expect(inputNameFilter).toBeInTheDocument();
    userEvent.type(inputNameFilter, 'Tatooine');
    const tdTableTatooine = await screen.findByText(/tatooine/i, {}, { timeout: 10000 });
    expect(tdTableTatooine).toBeInTheDocument();

    const inputColumnFilter = screen.getByTestId('column-filter');
    const inputComparisonFilter = screen.getByTestId('comparison-filter');
    const inputValueFilter = screen.getByTestId('value-filter');
    const inputButtonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(inputColumnFilter, 'population');
    userEvent.selectOptions(inputComparisonFilter, 'igual a');
    userEvent.type(inputValueFilter, '1000');
    userEvent.click(inputButtonFilter); 
  });
});