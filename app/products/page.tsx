import { fetchProducts } from '@/app/lib/products.api';
import Search from '@/app/products/search';

type Props = {
  searchParams: {
    name: string;
  };
};

export default async function ProductsPage({ searchParams }: Props) {
  const filter = searchParams.name;

  const products = await fetchProducts(filter);

  return (
    <div>
      <h1>Produktliste</h1>
      <Search />
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
