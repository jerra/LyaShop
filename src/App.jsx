import React, { useState } from 'react'
import './App.css'
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import ShoppingList from './components/ShoppingList.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="products-grid">
      <Header />
      <Product name="IPA" image="/ipa.jpg" desc="A delicious IPA beer." />
      <Product name="Lager" image="/lager.jpg" desc="A refreshing lager beer." />
      <Product name="Stout" image="/stout.jpg" desc="A rich stout beer." />
      
      <ShoppingList items={["Pilsner", "IPA", "Lager", "Stout", "Porter", "Wheat"]} />
    </div>
  );
}

export default App;
