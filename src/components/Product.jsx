import Price from './Price.jsx';

export default function Product({details}) {
  //const {name, image, desc, price} = props;

  return (
    <div className="product">
      <img className="product-img" src={details.thumbnail} alt={details.name} />
      <h3 className="product-name">{details.name}</h3>
      <p className="product-desc">Description</p>
      <div className="product-price">
        <Price value={details.original_price} currency="$" showDecimals={true} />
      </div>
    </div>
  );
}
