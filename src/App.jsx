import React, { useState } from 'react'
import './App.css'
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import Cart from './components/Cart.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="products-grid">
      <Header />
      <Product key="ipa" name="IPA" image="/ipa.jpg" desc="A delicious IPA beer." />
      <Product key="lager" name="Lager" image="/lager.jpg" desc="A refreshing lager beer." />
      <Product key="stout" name="Stout" image="/stout.jpg" desc="A rich stout beer." />
      
      <ShoppingList items={["Pilsner", "IPA", "Lager", "Stout", "Porter", "Wheat"]} />

      <Cart />
    </div>
  );
}

export default App;
