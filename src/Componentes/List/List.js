import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button} from '@material-ui/core';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  button: {
    margin: theme.spacing.unit,
  },
});

const HabilidadesT = props => <Link to="/habilidadesT" {...props} />

const ProyectosPage = props => <Link to="/proyectos" {...props} />
const Contacto = props => <Link to="/contacto" {...props} />

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <List component="nav" style={{zIndex: 99}}>
        
        <Button variant="outlined"  component={HabilidadesT} fullWidth className={classes.button}>
          Habilidades Tecnicas
      </Button>
        <Button variant="outlined" component={ProyectosPage} fullWidth className={classes.button}>
          Proyectos
      </Button>
        <Button variant="outlined" component={Contacto} fullWidth className={classes.button}>
          Contacto
      </Button>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);