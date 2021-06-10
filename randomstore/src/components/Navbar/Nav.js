import React from 'react'
import {AppBar,Typography, Button , Toolbar, Badge, Grid, Card, Link  } from '@material-ui/core';
// import logo from '/Users/Aaron/RandomStore/randomstore/src/assets/abcode.png';
import useStyles from './styles';

const Nav = ({totalcost, cartitems}) => {
    const styling = useStyles()
    return (
        <AppBar position="static">
        <Toolbar>
        <Grid container spacing={2}>
                <Grid xs>
                    <Typography variant="h6" className={styling.title}>
                        Random Store
                    </Typography>
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
