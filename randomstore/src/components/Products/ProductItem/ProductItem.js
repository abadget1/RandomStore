import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import useStyles from './styles'

const ProductItem = ({product, addProduct}) => {
    const handleAddToCart = e => {
      e.preventDefault()
      addProduct(product.id)
    }
    const styles = useStyles();
    return (
      <Container>
      <Card className={styles.root}>
        <CardActionArea         
        style={{ backgroundColor: "transparent" }}
        disableFocusRipple
        disableRipple    
        href={`/products/${product.id}`}>

        <CardContent>
          <CardMedia className={styles.media} image={product.media.source} title={product.name}/>
          <Typography gutterBottom variant="h5"> 
            {product.name}            
          </Typography>
          <Typography variant='h6' color="textSecondary" component="">
            {product.description.replace(/<[^>]*>?/gm, '')}
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container spacing={1} className={styles.grid}>
              <Grid item sm={10}>
                <Typography variant='h5' >
                {product.price.formatted_with_symbol}
              </Typography>
              </Grid>

              <Grid item xs={2}>
                <Button className={styles.addToCart} onClick={handleAddToCart}>
                  <AddShoppingCartOutlinedIcon/>
                </Button>
              </Grid>
            </Grid>
          </CardActions>
      </Card>
      </Container>
    );

};
export default ProductItem;