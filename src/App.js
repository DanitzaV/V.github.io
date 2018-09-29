import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Button, Typography, Hidden} from '@material-ui/core';
import './App.css';
import List from './Componentes/List/List';
import ListMobile from './Componentes/mobile/List';
import Home from './Componentes/page/Home';
import Appbar from './Componentes/Navbar/Appbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hidden only={['xs']}>
          <Appbar></Appbar>
        </Hidden>
          {this.props.children}
        <Grid container justify={'center'}  >
          <Grid item xs={12} >
            <Hidden only={['sm', 'lg', 'md', 'xl']}>
              <ListMobile></ListMobile>
            </Hidden>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default App;

