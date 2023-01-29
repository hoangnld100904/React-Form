import logo from './logo.svg';
import './App.css';
import { Form } from './components/form'
import { Table } from './components/table';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Form />
      <Table />
    </React.Fragment>
  );
}

export default App;
