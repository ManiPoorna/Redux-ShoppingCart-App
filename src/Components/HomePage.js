import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { addToCart } from '../redux/actions/cartActions.js';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const disptach = useDispatch();
  
  const [items, setItems] = useState([]);
  
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                const data = await response.data
                // console.log(data)
                setItems(data.products)
            }
            catch (error) {
                console.log("Error: ", error)
            }
        }
        getItems();
    }, [])
    
  return (
    <div className='home-page'>
      <div className='heading'>
          <h1>All items</h1>
      </div>
      <div className='container'>
        {
          items && items.map((item) => (
            <div className='item' key={item.id}>
              <div className='image'>
                <img src={item.images[0]} alt='product' />
              </div>
              <div className='desc'>
                <div className='title'> Product: {item.title }</div>
                <div className='price'> Price: ${item.price}</div>
                <div className='rating'>Rating: {item.rating}/5.0</div>
              </div>
              <div className='button'>
                <button className='add-to-cart' onClick={()=>disptach(addToCart(item))}>Add to cart</button>
              </div>
            </div>
          ))  
        }
      </div>
    </div>
  )
}

export default HomePage