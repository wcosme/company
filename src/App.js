import React, { Component } from 'react';
import{BrowserRouter, Route} from 'react-router-dom'


import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portfolio from './componentes/Portfolio'
import Preco from './componentes/Preco'
import Contatos from './componentes/Contatos'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/preco' component={Preco} />
          <Route path='/contatos' component={Contatos} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
