import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    
  },
};


const HabilidadesT = props => <Link to="/habilidadesT" {...props} />
const HomePage = props => <Link to="/" {...props} />
const ProyectosPage = props => <Link to="/proyectos" {...props} />
const Contacto = props => <Link to="/contacto" {...props} />

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Sobre Mi" value="Sobre Mi" icon={<SupervisedUserCircle />} component={HomePage}/>
        <BottomNavigationAction  label="Habilidades"  value="Habilidades Tech" icon={<FavoriteIcon />} component={HabilidadesT} />
        <BottomNavigationAction label="Proyectos" value="Proyectos" icon={<LocationOnIcon />} component={ProyectosPage}/>
        <BottomNavigationAction label="Contacto" value="Contacto" icon={<Icon>C</Icon>} component={Contacto}/>
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);