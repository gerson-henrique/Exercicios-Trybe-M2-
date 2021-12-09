import logo from './logo.svg';
import './App.css';
import { createPortal } from 'react-dom';

const compromises = ['a','b','c','d']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    compromises.map((valor)=> Task(valor) )
  );
}

export default App;
