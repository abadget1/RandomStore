import { Button } from "reactstrap";
import React, { Component, useEffect } from "react";

import stripHtml from 'string-strip-html';

const ProductItem = ({product, addProduct}) => {
    const handleAddToCart = e => {
      e.preventDefault()
      addProduct(product.id)
    }

    return (
      <div className="product__card">
        <img className="product__image" src={product.media.source} alt={product.name} />
        <div className="product__info">
          <h4 className="product__name">{product.name}</h4>
          <p className="product__description">
            {/* product description NOT stripped of html tags */}
            {product.description}
          </p>
          <div className="product__details">
            <p className="product__price">
            {product.price.formatted_with_symbol}
            </p>
            
            <Button name="Add to cart" className="product_btn" onClick={handleAddToCart}>
              Add to Cart
              </Button>
          </div>
        </div>
      </div>
    );

};
export default ProductItem;