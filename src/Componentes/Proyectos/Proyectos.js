
import  React from 'react';
import {Grid,Typography, Hidden} from '@material-ui/core';

const Proyectos = () => {
    return(
         <Grid>
        <Hidden only={['xs']}>
       
        <Grid container justify="center" className="desktopMore" >
        <Grid item xs={12} sm={12} md={12} xl={12} lg={12} style={{paddingTop: 75}}>
           <Typography align="center" style={{color: 'white'}}> Proyectos</Typography>
        </Grid>
        </Grid>
       
        </Hidden>
        </Grid>
        
    )
}
export default Proyectos;