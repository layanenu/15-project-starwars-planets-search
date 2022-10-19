import Provider from './context/provider';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
