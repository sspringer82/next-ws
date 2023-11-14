import { fetchProducts } from '@/app/lib/products.api';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Produktliste</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              {product.name} - {product.price.toFixed(2)} €
            </div>
          );
        })}
      </div>
    </div>
  );
}
