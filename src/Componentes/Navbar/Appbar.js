import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button ,Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

import './Navbar.css'
const styles  = theme => ( {
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 12,
    paddingLeft: 50,
    paddingRight: 50
    
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: grey[400],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
});

function SimpleAppBar(props) {
  const { classes } = props;
  const HomePage = props => <Link to="/" {...props} />
  const HabilidadesT = props => <Link to="/habilidadesT" {...props} />
  const ProyectosPage = props => <Link to="/proyectos" {...props} />
  const Contacto = props => <Link to="/contacto" {...props} />
  return (
    <div className={classes.root}>
   
      <AppBar position="fixed" color="default" className="navbar">
        <Toolbar>
        <Grid container justify={'center'}  className="navbar" >
          <Grid item  >
          <Button variant="outlined" component={HomePage} size="large" className={[ classes.cssRoot,classes.button,"bt"]}>
            Sobre Mi
          </Button>
          <Button variant="outlined"  size="large" component={HabilidadesT}  className={[ classes.cssRoot,classes.button,"bt"]}>
            Habilidades Tecnicas
          </Button>
          <Button variant="outlined" size="large" component={ProyectosPage}  className={[ classes.cssRoot,classes.button,"bt"]}>
            Proyectos
          </Button>
          <Button variant="outlined" size="large" component={Contacto}  className={[ classes.cssRoot,classes.button,"bt"]}>
            Contacto
          </Button>
          </Grid>
        </Grid> 
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
