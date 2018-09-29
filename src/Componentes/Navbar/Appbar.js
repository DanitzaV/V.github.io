import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 12,
    
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  const HomePage = props => <Link to="/" {...props} />
  const HabilidadesT = props => <Link to="/habilidadesT" {...props} />
  const ProyectosPage = props => <Link to="/proyectos" {...props} />
  const Contacto = props => <Link to="/contacto" {...props} />
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
          <Button variant="outlined" component={HomePage} className={classes.button}>
            Sobre Mi
          </Button>
          <Button variant="outlined" component={HabilidadesT}  className={classes.button}>
            Habilidades Tecnicas
          </Button>
          <Button variant="outlined" component={ProyectosPage}  className={classes.button}>
            Proyectos
          </Button>
          <Button variant="outlined" component={Contacto}  className={classes.button}>
            Contacto
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
