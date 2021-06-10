import { Button, Typography, CardMedia, Card, Grid, CircularProgress} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { commerce } from '../../../lib/commerce';
import  useStyles from './styles';

const ProductDetail = ({products, addProduct}) => {
  const [showSpinner, setShowSpinner] = useState(true)
  
  // Not good practice but it works..
  const productId = window.location.pathname.slice(10);

  const fetchProduct = async () => {
    await commerce.products.retrieve(window.location.pathname.slice(10))
  }

  const getProduct = (productId) => {
      const product = products.find((prod) => prod.id === productId);
      return (product);
  }

  const handleAddToCart = e => {
      e.preventDefault()
      addProduct(productId)
    }
  
  useEffect(() => {
    fetchProduct();
  }, [])

  const product = getProduct(productId);
  const styles = useStyles();

    
    const loading = () => {
      setTimeout(() => {
        setShowSpinner(false);
      }, 2000);
      if (showSpinner) {
        return <><h2>Loading...</h2></>;
      }
      return <CircularProgress />;
    };

    if (!product || !product.name) return loading();

    return (
      <Card className={styles.root}>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
            <CardMedia className={styles.media} image={product.media.source} title={product.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="h2" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography variant="subtitle1" paragraph>
          {product.description.replace(/<[^>]*>?/gm, '')}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Grid>
        
        <Grid item md>
          <Button variant="outlined" color="primary" href='/'>
            Back to products
          </Button>
        </Grid>
        </Grid>
      </Card>
    )
}

export default ProductDetail;