import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, incrementQuantity, decrementQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount=cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleCheckout = (e) => {
    let total = 0;
    cart.forEach((item)=> {total += item.cost*item.quantity;
    });
    alert( 'Your total is $' +total + ' more payment options coming soon! ')};

  


  const handleContinueShopping = (e) => {
    onContinueShopping;
};

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 0){
    dispatch(decrementQuantity(item))};
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item))
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {(item.quantity * parseInt("(item.cost)"))
  };
   const totalQuantity = cart.reduce((total, item)=> total += item.quantity,0);

  return (
    
    <div className="cart-container">
        <div className="cartnum">
        <h1 style ={{color:'white'}}> {totalQuantity}</h1>
        </div>

      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${item.cost * item.quantity}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
       
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckout(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


