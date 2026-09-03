import {useState} from 'react';

export default function Cart(props) {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (direction) => {
    if (direction === "increment") {
      setCounter(counter + 1);
    } else if (direction === "decrement" && counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="cart-wrapper">
      <h1>Shopping Cart</h1>
      <section className="cart-items">
        <div className="cart-item">
          <img className="cart-item-img" src="/ipa.jpg" alt="IPA beer" />
          <div className="cart-item-details">
            <h3 className="cart-item-name">IPA</h3>
            <p className="cart-item-price">$5.99</p>
            <button onClick={() => {handleIncrement("decrement")}} className="cart-item-remove">Remove</button>
            <button onClick={() => {handleIncrement("increment")}} className="cart-item-add">Add</button>
            <div className="cart-item-quantity">{counter}</div>
          </div>
        </div>
      </section>
    </div>
  );
}