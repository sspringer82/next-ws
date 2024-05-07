import { fetchProductById, fetchProducts } from '@/app/lib/products.api';
import Link from 'next/link';
import BackButton from './back-button';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function DetailPage({ params: { id } }: Props) {
  const product = await fetchProductById(id);

  return (
    <div>
      <h1>Detail works {product.name}</h1>
      <Image src="/apfel.png" width={447 / 4} height={599 / 4} alt="Apfel" />
      <BackButton />
      {/* <Link href="/products">zurück</Link> */}
    </div>
  );
}
