import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return(
 <div>{conteudos.map((a) => {
  return <div> <h4>{`O conteúdo é: ${a.conteudo} `}</h4>
   <p>{`Status: ${a.status}`}</p>
   <p>{`Bloco: ${a.bloco}`}</p>
   </div>
   
 })}</div>
    );
  }
}


export default Content