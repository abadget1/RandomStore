import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React, { Component, useEffect } from "react";
// import {ShoppingCartOutlinedIcon} from '@material-ui/icons';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import useStyles from './styles'

const ProductItem = ({key, product, addProduct}) => {
    const handleAddToCart = e => {
      e.preventDefault()
      addProduct(product.id)
    }
    const styles = useStyles();
    return (
      <Card className={styles.root}>
        <CardActionArea>
        <CardContent>
          <CardMedia className={styles.media} image={product.media.source} title={product.name}/>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description.replace(/<[^>]*>?/gm, '')}
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography variant='h5' >
              {product.price.formatted_with_symbol}
            </Typography>
            <Button onClick={handleAddToCart}>
              <AddShoppingCartOutlinedIcon/>
            </Button>
          </CardActions>
      </Card>
    );

};
export default ProductItem;