import {useState} from 'react';
import products from '../data/data.jsx';

export default function Cart() {
  const [cart, setCart] = useState(products);

  const handleAddProduct = (id) => {
    setCart(cart.map(item => {
      if(id === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }   
      return item;
    }));
  }

  const handleRemoveProduct = (id) => {    
    setCart(cart.map(item => {
      if(id === item.id) {
        return {
          ...item, 
          quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity 
        }
      }
      return item;
    }))
  }

  return (
    <div className="cart-wrapper">
      <h1>Shopping Cart</h1>
      {cart.map(product => 
        <div className="cart-item" key={product.id}>
          <img className="cart-item-img" src={product.image} alt={product.name} />
          <div className="cart-item-details">
            <h3 className="cart-item-name">{product.name}</h3>
            <p className="cart-item-price">${product.price}</p>
            <div className="cart-buttons">
              <div>{product.quantity}</div>
              <button onClick={() => {handleAddProduct(product.id)}} className="cart-item-add">Add</button>
              <button onClick={() => {handleRemoveProduct(product.id)}} className="cart-item-remove">Remove</button>
            </div>
            <div className="cart-item-total">
              ${(product.price / 100).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}