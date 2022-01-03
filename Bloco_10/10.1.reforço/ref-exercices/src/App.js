import './App.css';

const compromises = ['corrida','exercicio','revisão','almoço','trybe','exercicio','trybe']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    compromises.map((a)=> Task(a))
  );
}

export default App;
