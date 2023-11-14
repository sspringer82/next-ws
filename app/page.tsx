import { Product } from './lib/types';

export default async function Home() {
  const response = await fetch('http://localhost:8080/products');
  const data = (await response.json()) as Product[];

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
