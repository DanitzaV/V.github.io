import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Button, Typography, Hidden} from '@material-ui/core';
import './App.css';
import List from './Componentes/List/List';
import ListMobile from './Componentes/mobile/List';
import Home from './Componentes/page/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid container justify="center" >
          <Grid item sm={3} md={5} >
            <Hidden only={['xs']}>
              <List></List>
            </Hidden>
          </Grid>
          {this.props.children}
        </Grid>
        <footer>
         <Grid container justify={'center'}>
           <Grid item xs={10}>
             <Hidden only={['sm', 'lg', 'md', 'xl']}>
               <ListMobile></ListMobile>
             </Hidden>
           </Grid>
         </Grid>
       </footer>
      </div>
    );
  }
}

export default App;

