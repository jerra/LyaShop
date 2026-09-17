import { useState, lazy, Suspense } from 'react'
import './App.css'
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Cart from './components/Cart.jsx';
import products from './data/data.jsx';
import Products from './components/Products.jsx';


function App() {
  const [cart, setCart] = useState(products);

  const onAddProduct = (productId) => {
    setCart(cart.map(product => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }
      return product;
    }));
  }

  const onRemoveProduct = (productId) => {
    setCart(cart.map(cartProduct => {
      if(cartProduct.id === productId) {
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
      
      {products.map(product => {
        return (
          <Product
            key={product.id}
            details={product}
          />
        )
      })}
      
      <Cart onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} cart={cart} />
      <hr/>
      <Products />
    </div>
  );
}

export default App;
