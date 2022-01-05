import './App.css';
import React from 'react';

function handleClick() {
 console.log("Atom bomb lady, atom bomb")
}

class App extends React.Component {
 render(){ return (
   <div>
  <button onClick={ handleClick } > BTN 1 </button>

  </div>);
}
}

export default App;
