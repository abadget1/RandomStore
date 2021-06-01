import React, {Component} from 'react';
import ProductItem from'./ProductItem';

const ProductsList = ({ products, addProduct }) => {
// console.log(products);
        return(
            <div className="products">
                <h2>Here at Random Store we believe in purpose random shit and the pursuit of happiness!</h2>
                <h2>Have fun buying some shit!</h2>
                <a href='/home'>Take my ass home..</a>
                <br/>
                <a href='/cart'>Cart</a>
                {products.map((product) => (<ProductItem key={product.id} product={product} addProduct={addProduct}/>))}                
                </div>
        )
}

export default ProductsList;