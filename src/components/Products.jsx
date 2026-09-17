import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "../helpers/fetcher.jsx";
import Product from "./Product.jsx";

export default function Products() {

  //const id = 1;

  const { data: products } = useSuspenseQuery({
    queryKey: ["products-list"],
    queryFn: () => get("products-list"),
  });

  console.log(products);

  return (
    <>
      <div className="products-title">
        <h1>Products</h1>
      </div>
    
      <div className="products-grid">
        {products.map(product => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
}