import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const styles= {
  root: {
    
  },

};



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
      <IconButton aria-label="Delete" >
          <DeleteIcon />
        </IconButton>
        <BottomNavigationAction label="Sobre Mi" value="Sobre Mi" icon={<SupervisedUserCircle />} />
        <BottomNavigationAction label="Habilidades Tech" value="Habilidades Tech" icon={<FavoriteIcon />}/>
        <BottomNavigationAction label="Nearby" value="Proyectos" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
