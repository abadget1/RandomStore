import React, {useState} from 'react'

import CartItem from './CartItem';
import Banner from '../CheckoutForm/Banner'
import { Button, Card, Grid, Typography } from '@material-ui/core';
import  useStyles from './styles';

const Cart = ({ 
  cartData,
  onUpdateProduct,
  handleEmptyCart,
  RemoveItemFromCart
}) => {
  const styles = useStyles();
    const [showSpinner, setShowSpinner] = useState(true)
    
    const onEmptyCart = () => {
        handleEmptyCart();
    }

    const loading = () => {
      setTimeout(() => {
        setShowSpinner(false);
      }, 2000);
      if (showSpinner) {
        return <><p>Loading...</p></>;
      }
      return <Banner />;
    };


        if (!cartData.line_items || !cartData.line_items.length) return loading();
        return(
          <Card className={styles.main}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h4" align="center" >
                  My Shopping Cart
                </Typography> 
              </Grid>
              <Grid item xs={12}>              
              <Button variant="outlined" color="secondary" href='/' >Back</Button>
              </Grid>
              <Grid item xs={3}>              
              <Typography style={{float: "right"}} gutterBottom variant="subtitle1">
                Your Items:
              </Typography> 

              </Grid>
              <Grid item xs={12}>
            {cartData.line_items.map((product) => (
               <CartItem 
               product={product} 
               onUpdateProduct={onUpdateProduct}
               RemoveItemFromCart={RemoveItemFromCart}/>
            ))}
            </Grid>
            <Grid item xs={12} >
            <Typography gutterBottom className={styles.total}>
              Total: {cartData.subtotal.formatted_with_symbol}
            </Typography>
            </Grid>
 

            <Grid item md={12}>
              {/* <Button variant="contained" href='/home'>Home</Button>
              <Button variant="contained" href='/'>Products</Button> */}
              <Button  variant="contained" onClick={onEmptyCart}>Empty cart</Button>
              <Button variant="contained" style={{float: "right"}}color="primary" href='/checkout'>Checkout</Button>
            </Grid>
          </Grid>
        </Card>
        );
}

export default Cart;