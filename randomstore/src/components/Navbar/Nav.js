import React from 'react'
import {AppBar,Typography, Button ,Container,Card, CardMedia, Toolbar, IconButton, Badge  } from '@material-ui/core';
import logo from '/Users/Aaron/RandomStore/randomstore/src/assets/abcode.png';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const Nav = ({totalcost, cartitems}) => {
    const styling = useStyles()
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={styling.title}>
            Random Store
            </Typography>
            <Badge badgeContent={cartitems} color='secondary'>
            <Button color="inherit" href='/cart'>Cart</Button>
            </Badge>
        </Toolbar>
        </AppBar>
    );
}

export default Nav
