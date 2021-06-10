import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductItem from './ProductItem/ProductItem';
import useStyles from './styles';

const ProductsList = ({ products, addProduct }) => {
const styles = useStyles();

  return (

      <main>
        {/* Hero unit */}
        <div className={styles.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                Products page            
                </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={6} >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Button href={`/products/${product.id}`}>
                <ProductItem key={product.id} product={product} addProduct={addProduct}/>
              </Button>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
  );
}
export default ProductsList;