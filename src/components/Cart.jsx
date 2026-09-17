export default function Cart({cart, onAddProduct, onRemoveProduct}) {

  return (
    <div className="cart-wrapper">
      <h1>Shopping Cart</h1>
      {cart.map(product => 
        <div className="cart-item" key={product.id}>
          <img className="cart-item-img" src={product.image} alt={product.name} />
          <div className="cart-item-details">
            <h3 className="cart-item-name">{product.name}</h3>
            <p className="cart-item-price"> ${(product.price / 100).toFixed(2)}</p>
            <div className="cart-buttons">
              <div>{product.quantity}</div>
              <button onClick={() => {onAddProduct(product.id)}} className="cart-item-add">Add</button>
              <button onClick={() => {onRemoveProduct(product.id)}} className="cart-item-remove">Remove</button>
            </div>
            <div className="cart-item-total">
              ${(product.price / 100 * product.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}