// Definir o estado da aplicação
const INITIAL_STATE = {
  theme: 'light'
}

// Definir as mudanças do estado

const changeTheme = () => {
  return{ 
    type:'CHANGE_THEME'
  }
}

// definir as mudanças que ocorrerão no estado

const reducer= (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CHANGE_THEME':
      return { theme: state.theme === 'light'? 'dark' : 'light'}
     
  
    default:
      return state;
  }
}

// Acessar o gerenciador do Estado

const store = Redux.createStore(reducer);

// definir as mudanças na store

store.subscribe(() => {
  const wrapper = document.getElementById('wrapper');
  const state = store.getState();
  wrapper.class = state.theme;


})

// disparar mudanças

const buttonE = document.getElementById('light-switch')
buttonE.addEventListener('click', () => {
  store.dispatch(changeTheme())
})''


//Chamamos A Store
//Imeplementamos o Reducer da Store (Definir como os states serão alterados)
//Reduce deve Startarseus states
//use os ouvidores de evento para despachar 
//Atualize seus inscritos com as mudanças