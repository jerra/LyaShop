import React, { useState } from 'react'
import './App.css'
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import Cart from './components/Cart.jsx';
import products from './data/data.jsx';


function App() {
  const [cart, setCart] = useState(products);

  const onAddProduct = (newProduct) => {
    setCart(cart.map(product => {
      if(product.id === newProduct.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }   
      return product;
    }));
  }

  const onRemoveProduct = (product) => {    
    setCart(cart.map(cartProduct => {
      if(cartProduct.id === product.id) {
        return {
          ...cartProduct, 
          quantity: cartProduct.quantity > 0 ? cartProduct.quantity - 1 : cartProduct.quantity 
        }
      }
      return cartProduct;
    }))
  }

  return (
    <div className="products-grid">
      <Header cart={cart} />
      <Product key="ipa" name="IPA" image="/ipa.jpg" desc="A delicious IPA beer." />
      <Product key="lager" name="Lager" image="/lager.jpg" desc="A refreshing lager beer." />
      <Product key="stout" name="Stout" image="/stout.jpg" desc="A rich stout beer." />
      
      <ShoppingList items={["Pilsner", "IPA", "Lager", "Stout", "Porter", "Wheat"]} />

      <Cart onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} cart={cart} />
    </div>
  );
}

export default App;
