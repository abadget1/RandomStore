import React from 'react';

const CartItem = ({  
  item,
  updateProduct,
  RemoveItemFromCart}) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    updateProduct(lineItemId, newQuantity);
  }

  const handleRemoveFromCart = (lineItemId) => {
    RemoveItemFromCart(lineItemId);
  }

    return (
      <div className="cart-item">
        <img className="cart-item__image" src={item.media.source} alt={item.name} />
        <div className="cart-item__details">
          <h4 className="cart-item__details-name">{item.name}</h4>
          <div className="cart-item__details-qty">
            <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} title="Decrease quantity">-</button>
            <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} title="Increase quantity">+</button>
            <p>{item.quantity}</p>
          </div>
          <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
        </div>
        <button type="button" className="cart-item__remove" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
      </div>
    );
};

export default CartItem;