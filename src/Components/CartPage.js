import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions.js';

const CartPage = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state);
  console.log(cartItems);
  const getPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    })
    return total;
  }
  const total = getPrice();
  
  return (
    <div className='home-page'>
      <div className='heading'>
        <h1 >My Cart</h1>
      </div>
      <div className='cart-checkout'>
       <div className='cart-container'>
       {
          cartItems && cartItems.map((item) => (
            <div className='cart-item' key={item.id}>
              <div className='cart-image'>
                <img src={item.images[0]} alt='product' />
              </div>
              <div className='cart-desc'>
                <div className='cart-title'> Product: {item.title }</div>
                <div className='cart-price'> Price: ${item.price}</div>
                <div className='cart-rating'>Rating: {item.rating}/5.0</div>
              </div>
              <div className='cart-button'>
                <button className='cart-add-to-cart' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from cart</button>
              </div>
            </div>
          ))  
        }
        </div>
        <div className='checkout'>
          <h2>Checkout List</h2>
          <div id='all-desc'>
            {
              cartItems && cartItems.map((item) => (
                <div className='checkout-desc'>
                  <p>{ item.title}</p>
                  <p>${ item.price}</p>
                </div>
              ))
            }
          </div>
          <div className='total-price'>
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button className='checkout-btn'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage