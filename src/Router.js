import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Home from './Componentes/page/Home';
import HabilidadesT from './Componentes/HabilidadesT/HabilidaesT';
import Proyectos from './Componentes/Proyectos/Proyectos';
import Contacto from './Componentes/Contacto/Contacto';



export default class Router extends Component {
  constructor() {
    super();

   
  }

  render() {
    return (
      <ReactRouter>
        <App>
          <Route exact path="/" component={Home}></Route>
          <Route path="/habilidadesT" component={HabilidadesT}></Route>
          <Route path="/proyectos" component={Proyectos}></Route>
          <Route path="/contacto" component={Contacto}></Route>
        </App>
      </ReactRouter>
    )

  }
}