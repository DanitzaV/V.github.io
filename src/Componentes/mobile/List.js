import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Accountcircle from '@material-ui/icons/Face';
import Start from '@material-ui/icons/Star';
import View from '@material-ui/icons/ViewQuilt';
import Contact from '@material-ui/icons/Contacts'
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
const accent = '#FFFFFF';
const HabilidadesT = props => <Link to="/habilidadesT" {...props} />
const HomePage = props => <Link to="/" {...props} />
const ProyectosPage = props => <Link to="/proyectos" {...props} />
const Contacto = props => <Link to="/contacto" {...props} />

function FloatingActionButtons(props) {
 const { classes } = props;
 return (
   <Grid container justify="center" alignItems="center" className="fixed-bottom" >
     <Grid item >
       <Button variant="fab" color aria-label="Add" className={classes.button} component={HomePage}>
       <Accountcircle/>
       </Button>
       <Button variant="fab"  aria-label="Edit" className={classes.button} component={HabilidadesT}>
         <Start></Start>
       </Button>
       <Button variant="fab" aria-label="Delete" className={classes.button} component={ProyectosPage}>
         <View/>
       </Button>
       <Button variant="fab"  aria-label="Edit" className={classes.button} component={Contacto}>
         <Contact/>
       </Button>
     </Grid>

   </Grid>
 );
}

FloatingActionButtons.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);