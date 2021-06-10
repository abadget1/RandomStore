import { Button, ButtonBase, Card, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import  useStyles from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Link } from 'react-router-dom';

const CartItem = ({ product, onUpdateProduct, RemoveItemFromCart }) => {
  
  const styles = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    onUpdateProduct(lineItemId, newQuantity);
  }

  const handleRemoveFromCart  = e => {
    e.preventDefault()
    RemoveItemFromCart(product.id);
  }  

  const [showSpinner, setShowSpinner] = useState(true)
    
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
      <div className={styles.paper}>

      <Card className={styles.paper}>
      <Grid container spacing={4}>
        <Grid item>
        <ButtonBase className={styles.image}>
          <img className={styles.img} alt={product.name} src={product.media.source} />
        </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <CardMedia image={product.media.source} title={product.name} />
              <Typography gutterBottom variant="subtitle1">
                {product.name}
              </Typography>
        
            </Grid>
            <Grid item>
              <Button  color="secondary" style={{ cursor: 'pointer' }} onClick={handleRemoveFromCart}>
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" >{product.price.formatted_with_symbol}</Typography>
          <Typography variant="subtitle2">Qty: {product.quantity}</Typography>
          <Link size="small" onClick={() => handleUpdateCartQty(product.id, product.quantity + 1)}>
          <AddCircleOutlineIcon />
          </Link>
          <Link color="primary" size="small" onClick={() => handleUpdateCartQty(product.id, product.quantity - 1)}>
          <RemoveCircleOutlineIcon />          
          </Link>
          </Grid>
        </Grid>
      </Grid>
    </Card>
    </div>
    )
};

export default CartItem;