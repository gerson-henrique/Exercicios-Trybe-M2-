
import React from 'react';
import './App.css';
import AreaTxt from './AreaTxt';

class App extends React.Component {
 
  render(){
  return (
    <div className="App">
    <fieldset>
      <h1>Informações Pessoais</h1>
      <AreaTxt label="Name" type="Text" limit="40"/>
      <AreaTxt label="Email" type="Text" limit="50"/>
      <AreaTxt label="CPF" type="Text" limit="11"/>
      <AreaTxt label="Endereço" type="Text" limit="200"/>
      <AreaTxt label="Cidade" type="Text" limit="200"/>


    </fieldset>
    <fieldset>
      <h1>Form v2</h1>
      <textarea></textarea>
      <AreaTxt label="Email" type="Text" limit="50"/>
      <AreaTxt label="CPF" type="Text" limit="11"/>
      <AreaTxt label="Endereço" type="Text" limit="200"/>
      <AreaTxt label="Cidade" type="Text" limit="200"/>
    </fieldset>
    </div>
  );
}
}

export default App;
