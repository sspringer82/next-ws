import { fetchProducts } from '@/app/lib/products.api';
import Search from '@/app/products/search';
import Link from 'next/link';
import '@/app/products/product.css';
import '@/app/products/product.scss';
import styles from '@/app/products/products.module.css';
import clsx from 'clsx';

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
      <h1 className="border">Produktliste</h1>
      <Search />
      <div className="productContainer">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className={clsx({
                [styles.productRow]: true,
                [styles.active]: product.id === 2,
              })}
            >
              <div>
                <Link
                  href={`products/${product.id}`}
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {product.name}
                </Link>
              </div>
              <div className="price">{product.price.toFixed(2)} €</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
