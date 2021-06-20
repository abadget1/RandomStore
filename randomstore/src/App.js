import React, { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider, useTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import ProductsList from './components/Products/ProductsList';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import theme from './assets/modules/theme';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCart] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [orderError, setOrderError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchCartData = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  
  const addProduct = async (productId) => {
    const response = await commerce.cart.add(productId, 1);
    setCart(response.cart);
  };

  const RemoveItemFromCart = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const onUpdateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, {quantity});
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCartData = await commerce.cart.refresh();
    setCart(newCartData);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrderInfo(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchProducts();
    fetchCartData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Router>
      <div>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <Nav
          cartitems={cartData.total_items}
          totalcost={(cartData.subtotal && cartData.subtotal.formatted_with_symbol) || "00.00"}/>
        <Switch>
        <Route exact path="/">
            <ProductsList products={products} addProduct={addProduct} />
          </Route>
          <Route exact path={`/products/:id`}>
            <ProductDetail products={products} addProduct={addProduct} />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/Home'>
            <Home/>
            
          </Route>
          <Route exact path="/cart">
          <Cart
              cartData={cartData}
              onUpdateProduct={onUpdateProduct}
              handleEmptyCart={handleEmptyCart}
              RemoveItemFromCart={RemoveItemFromCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
            cartData={cartData} 
            order={orderInfo} 
            onCaptureCheckout={handleCaptureCheckout} 
            error={errorMessage}
            // For demo purpose only!
            refreshCart={refreshCart}
            />
          </Route>
        </Switch>
        <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;