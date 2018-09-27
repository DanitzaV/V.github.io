import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './List.css';
const styles = theme => ({
 button: {
   margin: 12,
 },
 extendedIcon: {
   marginRight: theme.spacing.unit,
 },
});

const HabilidadesT = props => <Link to="/habilidadesT" {...props} />
const HomePage = props => <Link to="/" {...props} />
const ProyectosPage = props => <Link to="/proyectos" {...props} />
const Contacto = props => <Link to="/contacto" {...props} />

function FloatingActionButtons(props) {
 const { classes } = props;
 return (
   <Grid container justify="space-between" alignItems="center" className="fixed-bottom">
     <Grid item xs={12}>
       <Button variant="fab" color="primary" aria-label="Add" className={classes.button} component={HomePage}>
         <AddIcon />
       </Button>
       <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button} component={HabilidadesT}>
         <Icon></Icon>
       </Button>
       <Button variant="fab" aria-label="Delete" className={classes.button} component={ProyectosPage}>
         <NavigationIcon />
       </Button>
       <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button} component={Contacto}>
         <Icon></Icon>
       </Button>
     </Grid>

   </Grid>
 );
}

FloatingActionButtons.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);