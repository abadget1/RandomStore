import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductItem from './ProductItem/ProductItem';
import useStyles from './styles';
import Banner from '../CheckoutForm/Banner';
import { LinearProgress } from '@material-ui/core';

const ProductsList = ({ products, addProduct }) => {
  const [showSpinner, setShowSpinner] = useState(true)

  const styles = useStyles();
const loading = () => {
  setTimeout(() => {
    setShowSpinner(false);
  }, 2000);
  if (showSpinner) {
    return <LinearProgress color="secondary"/>;
  }
  return <LinearProgress color="secondary"/>;
};

if (!products) return loading();


  return (

      <main className={styles.heroContent}>
        {/* Hero unit */}
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>
                Products page            
                </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={0} className={styles.heroContent}>
          {products.map((product) => (
            <Grid item key={product.id} sm={6}>
                <ProductItem key={product.id} product={product} addProduct={addProduct}/>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
  );
}
export default ProductsList;