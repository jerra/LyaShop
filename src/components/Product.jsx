import Price from './Price.jsx';

export default function Product(props) {
  const {name, image, desc} = props;

  return (
    <div className="product">
      <img className="product-img" src={image} alt="Vite logo" />
      <h3 className="product-name">{name}</h3>
      <p className="product-desc">{desc}</p>
      <div className="product-price">
        <Price value={500} currency="$" showDecimals={true} />
      </div>
    </div>
  );

}
