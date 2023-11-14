import { fetchProductById, fetchProducts } from '@/app/lib/products.api';
import Link from 'next/link';
import BackButton from './back-button';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function DetailPage({ params }: Props) {
  const product = await fetchProductById(params.id);

  return (
    <div>
      <h1>Detail works {product.name}</h1>
      <BackButton />
      {/* <Link href="/products">zurück</Link> */}
    </div>
  );
}
