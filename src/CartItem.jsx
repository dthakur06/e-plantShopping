import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 return items.reduce((total, item) => total + item.quantity * item.cost, 0);
  };

  const handleContinueShopping = (e) => {
   <div>
      <h2>Plants List</h2>
      {/* Example plant data */}
      <div>
        <h3>Plant 1</h3>
        <button onClick={() => handleAddToCart({ id: 1, name: 'Plant 1', price: 10 })}>
          Add to Cart
        </button>
      </div>
      <div>
        <h3>Plant 2</h3>
        <button onClick={() => handleAddToCart({ id: 2, name: 'Plant 2', price: 15 })}>
          Add to Cart
        </button>
      </div>
    </div>
  };
   const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name, quantity: quantity + 1 }));
  };

  const handleDecrement = (item) => {
     if (quantity === 1) {
      dispatch(removeItem({ name }));
    } else {
      dispatch(updateQuantity({ name, quantity: quantity - 1 }));
    }
   
  };

   const handleRemove = (name) => {
    dispatch(removeItem({ name }));
  };

  const handleRemoveFromCart = (name) => {
    dispatch(removeItem({ name })); // Dispatch removeItem with the plant's name
  };

  const handleUpdateQuantity = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity })); // Dispatch updateQuantity with name and new quantity
  };

  return (
    <div>
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p>Price: ${plant.cost}</p>
      <p>Quantity: {plant.quantity}</p>
      
      {/* Buttons for handling actions */}
      <button onClick={() => handleUpdateQuantity(plant.name, plant.quantity + 1)}>
        Increase Quantity
      </button>
      <button onClick={() => handleRemoveFromCart(plant.name)}>
        Remove from Cart
      </button>
    </div>
  );
}

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (quantity, cost) => {
    return quantity * cost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );

export default CartItem;


