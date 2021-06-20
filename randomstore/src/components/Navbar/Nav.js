import React from 'react'
import {AppBar,Typography, Button , Toolbar, Badge, Grid, Card, Link  } from '@material-ui/core';
// import logo from '/Users/Aaron/RandomStore/randomstore/src/assets/abcode.png';
import useStyles from './styles';

const Nav = ({totalcost, cartitems}) => {
    const styles = useStyles()
    return (
        <AppBar position="static">
        <Toolbar>
        <Grid container spacing={2}>
                <Grid item xs>
                    <Button className={styles.home} disableFocusRipple disableRipple href='/'>
                    <Typography variant="h5" className={styles.title}>
                        Random Store
                    </Typography>
                    </Button>
                </Grid>
                <Grid item xs={6}>   
                <div align="center">
                    <Button color="inherit" href='/home'>Home</Button>
                    <Button color="inherit" href='/about'>About</Button>
                    <Button color="inherit" href='/'>Products</Button>           
                </div>
                </Grid>   
                <Grid item xs >
                    <div style={{float: "right"}}>
                    <Badge badgeContent={cartitems} color='secondary'>
                        <Button color="inherit" href='/cart'>Cart</Button>
                    </Badge>
                    </div>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
    );
}

export default Nav
