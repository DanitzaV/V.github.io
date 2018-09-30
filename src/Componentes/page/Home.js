import React, { Component } from 'react';
import {Grid, Button, Typography, Hidden} from '@material-ui/core';
import './../../App.css';
import List from './../List/List';
import ListMobile from './../mobile/List';
import './Home.css'
class Home extends Component {
  render() {
    return (
      <Grid container >
        <Hidden only={['sm', 'lg', 'md', 'xl']}>
          <Grid container justify="center" className="mobile">
          <Grid item xs={12} className="fondomobiel">
            <h2 className="title">Viviana Marcelo</h2>
            <p  className="aboutme">Front-end Developer</p>
            <Typography align="center" style={{ color: 'white', padding: 12 }}>Cuando salí de la secundaria , no sabía qué estudiar,
              afortunadamente Laboratoria se presentó en mi camino.En el bootcamp
              descubrí que me encanta codear y aprendí todo lo necesario para convertirme en
              front-end developer.
            </Typography>
          </Grid>
          </Grid>
         
        </Hidden>
        <Hidden only={['xs','md']} >
          <Grid container justify="center" className="desktop" >
          <Grid item sm={6} md={7} xl={8} style={{paddingTop: 40,}} className={['fondo']}>
            <h2 className="title">Viviana Marcelo</h2>
            <p  className="aboutme">Front-end Developer</p>
            <Typography align="center" style={{ color: 'white' }}>Cuando salí de la secundaria , no sabía qué estudiar,
              afortunadamente Laboratoria se presentó en mi camino.En el bootcamp
              descubrí que me encanta codear y aprendí todo lo necesario para convertirme en
              front-end developer.
            </Typography>
          </Grid>
          <Grid item sm={6} md={5} xl={4} style={{paddingTop: 180,paddingLeft: 70,paddingRight: 70}} className="fondo">    
            <Typography align="center" style={{ color: 'white' }}>Cuando salí de la secundaria , no sabía qué estudiar,
              afortunadamente Laboratoria se presentó en mi camino.En el bootcamp
              descubrí que me encanta codear y aprendí todo lo necesario para convertirme en
              front-end developer.
            </Typography>
          </Grid>
          </Grid>
          
        </Hidden>
        <Hidden only={['xs','sm','lg','xl']} >
          <Grid container justify="center" className="desktop" >
          <Grid item sm={6} md={7} xl={8} style={{paddingTop: 40,}} className={['fondo']}>
            <h2 className="title">Viviana Marcelo </h2>
            <p  className="aboutme">Front-end Developer</p>
            <Typography align="center" className="parrafoMd" style={{ color: 'white' }} style={{paddingLeft: 61,paddingRight: 74,color: 'white'}}>Cuando salí de la secundaria , no sabía qué estudiar,
              afortunadamente Laboratoria se presentó en mi camino.En el bootcamp
              descubrí que me encanta codear y aprendí todo lo necesario para convertirme en
              front-end developer.
            </Typography>
          </Grid>
          <Grid item sm={6} md={5} xl={4} style={{paddingTop: 180,paddingLeft: 61,paddingRight: 74}} className="fondo">    
          <Typography align="center" className="parrafoMd" style={{ color: 'white' }}>Cuando salí de la secundaria , no sabía qué estudiar,
              afortunadamente Laboratoria se presentó en mi camino.En el bootcamp
              descubrí que me encanta codear y aprendí todo lo necesario para convertirme en
              front-end developer.
            </Typography>
          </Grid>
          </Grid>
          
        </Hidden>

      </Grid>
    );
  }
}

export default Home;