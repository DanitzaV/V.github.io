import React, { Component } from 'react';
import {Grid, Button, Typography, Hidden} from '@material-ui/core';
import './../../App.css';
import List from './../List/List';
import ListMobile from './../mobile/List';
class Home extends Component {
  render() {
    return (
      <Grid item sm={9} xs={12} md={7}>
           <Typography > hola</Typography>
        </Grid>
    );
  }
}

export default Home;