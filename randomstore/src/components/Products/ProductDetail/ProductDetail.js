import { CssBaseline, Container, Button, Typography, CardMedia, Card, Grid, CardActions, CardContent, CardActionArea} from '@material-ui/core'
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import  useStyles from './styles';

const ProductDetail = ({products, addProduct}) => {

  const fetchProduct = async () => {
    await commerce.products.retrieve(window.location.pathname.slice(10))
  }
    // Not good practice but it works..
    const productId = window.location.pathname.slice(10);

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

    // setTimeout(getProduct(productId), 1000);
    const product = getProduct(productId);
    // const product = setTimeout(getProduct(productId), 1000);
    const styles = useStyles();
    console.log(product)

    return (
        <React.Fragment>
            <CssBaseline/>
      <Card className={styles.root}>
        <CardActionArea>
        <CardContent>
          {/* <CardMedia className={styles.media} image={product.media.source} title={product.name}/> */}

          <Typography gutterBottom variant="h5" component="h2">
            {/* {product.name}             */}
          </Typography>
          

          <Typography variant="body2" color="textSecondary" component="p">
            {/* {product.description.replace(/<[^>]*>?/gm, '')} */}
          </Typography>
            <Typography gutterBottom variant="h5" component="h2">
            {/* {product.price.formatted_with_symbol} */}
          </Typography></CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleAddToCart}>
                Add to Cart
            </Button>
          </CardActions>
      </Card>
        </React.Fragment>
    )
}

export default ProductDetail;