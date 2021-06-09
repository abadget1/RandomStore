import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProductItem from './ProductItem/ProductItem';
import useStyles from './styles';
import ProductDetail from './ProductDetail/ProductDetail';
import { Hidden } from '@material-ui/core';
import { commerce } from '../../lib/commerce';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const ProductsList = ({ products, addProduct }) => {
const styles = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={styles.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Products page            
                </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={styles.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href='/home'>
                    Home                  
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href='/about'>
                    About
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}

        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Link href={`/products/${product.id}`}>
                <ProductItem key={product.id} product={product} addProduct={addProduct}/>
              </Link>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
    </React.Fragment>
  );
}
export default ProductsList;