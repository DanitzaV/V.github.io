import React, { Component } from 'react';
import {Grid, Button, Typography, Hidden} from '@material-ui/core';
import './../../App.css';
import List from './../List/List';
import ListMobile from './../mobile/List';
class Home extends Component {
  render() {
    return (
      <Grid item  xs={12} sm={9} md={7}>
           <Typography > Sobre Mi</Typography>
        </Grid>
    );
  }
}

export default Home;