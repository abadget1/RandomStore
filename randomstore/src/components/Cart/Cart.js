import React, {useState} from 'react'

import CartItem from './CartItem';
import Banner from '../CheckoutForm/Banner'
import { Link } from 'react-router-dom';
const Cart = ({ 
  cartData,
  updateProduct,
  handleEmptyCart,
  RemoveItemFromCart
}) => {
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
            <div className="cart">
                <h4 className="cart_heading">Your Cart</h4>
                <div>
            {cartData.line_items.map((item) => (
              <div key={item.id}>
             <div>
               <div>{item.name}</div>
               <CartItem 
               item={item} 
               updateProduct={updateProduct}
               RemoveItemFromCart={RemoveItemFromCart}/>
             </div> 
             </div>
            ))}
          </div>
          <button className="cart__btn-empty" onClick={onEmptyCart}>Empty cart</button>
                <br/>
                <a href='/checkout'>Checkout</a>
                <a href='/home'>Home</a>

                <br/>
                <a href='/'>Products</a>
            </div>
        );
}

export default Cart;